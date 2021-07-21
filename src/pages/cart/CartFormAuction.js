import { React, useState, useEffect } from 'react'
import {
  countries,
  townships,
  data,
} from './data/townships'
import Cookies from 'universal-cookie'

import Basket2Auction from './components/Basket2Auction'

import { ReactComponent as Logo } from '../../pics/logo-bk.svg'

// components
import CartAuctionFinish from './components/CartAuctionFinish'

// @material-ui
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

// styles
import '../../bootstrap/css/bootstrap.css'
import './styles/cart-shipping.scss'
import './styles/cart-payment.scss'

// icon
import { FaLock } from 'react-icons/fa'
import { RiArrowRightSLine } from 'react-icons/ri'

function CartFormProduct() {
  // 假設會員id
  const [memberid, setMemberId] = useState('')
  const [membername, setMemberName] = useState('')

  // 驗證身分
  async function getjwtvertifyFromServer() {
    const token = localStorage.getItem('token')

    const response = await fetch(
      'http://localhost:6005/users/checklogin',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
        }),
      }
    )

    const data = await response.json()
    console.log(data)
    if (!data.id) {
      window.location.href = './user-login'
    }
    setMemberId(data.id)
    setMemberName(data.name)
  }

  useEffect(() => {
    //驗證身分
    getjwtvertifyFromServer()
  }, [])

  // 城市與地區
  const [country, setCountry] = useState(-1)
  const [township, setTownship] = useState(-1)

  // 組合信用卡過期日用
  const [cardexpmon, setCardExpMon] = useState('')
  const [cardexpyr, setCardExpYr] = useState('')

  // checkbox
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  })
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    })
  }

  const [formStep, setFormStep] = useState(0)
  const completeFormStep = () => {
    console.log(setFormStep)
    setWholeAddress(
      `${countries[country]}${townships[country][township]}${useraddress}`
    )
    setFormStep((cur) => cur + 1)
  }
  // formbutton
  const renderButton = () => {
    if (formStep > 1) {
      return undefined
    } else if (formStep === 1) {
      return (
        <div className="my-4">
          <button
            type="button"
            disabled={
              !username ||
              country == -1 ||
              township == -1 ||
              !useraddress ||
              !userphone
            }
            onClick={postOrderToSever}
            key="1"
            // onClick={completeFormStep}
            className="c-checkoutbtn2"
          >
            確認付款
          </button>
        </div>
      )
    } else {
      return (
        <div className="my-4">
          <button
            disabled={
              !username ||
              country == -1 ||
              township == -1 ||
              !useraddress ||
              !userphone
            }
            onClick={completeFormStep}
            type="button"
            key="2"
            className="c-checkoutbtn2"
          >
            繼續結帳
          </button>
        </div>
      )
    }
  }
  // 回前一頁
  const goToPreviousStep = () => {
    setFormStep((cur) => cur - 1)
  }

  const [cartItems, setCartItems] = useState([])

  const cookies = new Cookies()

  useEffect(() => {
    let tempArr = []
    let cookieProductArr = cookies.get('auc') // get Cookies
    if (cookieProductArr) {
      for (let i = 0; i < cookieProductArr.length; i++) {
        let product = cookieProductArr[i]
        tempArr.push(product)
      }
      setCartItems(tempArr)
    }
  }, [])

  // 開始存入訂單
  // 定義要存入的資料
  // 訂單
  const [userid, setUserId] = useState('')
  const [orderpay, setOrderPay] = useState('VISA')
  const [cardnumber, setCardNumber] = useState('')
  const [cardexpdate, setCardExpDate] = useState('')
  const [username, setUserName] = useState('')
  const [userphone, setUserPhone] = useState('')
  const [useraddress, setUserAddress] = useState('')
  const [ordership, setOrderShip] = useState(
    '宅配到府 - 運費：NT$ 80'
  )
  const [orderstatus, setOrderStatus] = useState('0')
  const [orderprice, setOrderPrice] = useState('')
  const [ordertype, setOrdertype] = useState('')

  const [whole_address, setWholeAddress] = useState('')
  // 訂單細節

  // 定義此筆訂單產生的訂單編號
  const [sentorder, setSentOrder] = useState('')

  // 傳訂單到伺服器
  async function postOrderToSever() {
    // 印出市: countries[country]
    // 印出區: townships[country][township]
    // let address = `${countries[country]}${townships[country][township]}${address}`

    // 準備好送給node的json資料
    const orderid = new Date().getTime()
    setSentOrder(orderid)

    const newData = {
      orderid,
      userid: memberid,
      orderpay,
      cardnumber,
      cardexpdate: `${cardexpmon}/${cardexpyr}`,
      username,
      userphone,
      useraddress: whole_address,
      ordership,
      orderstatus: '0',
      orderprice: itemsPrice + shipfee - discount,
      ordertype: 'c',
    }

    // 連接的伺服器資料網址
    const url = 'http://localhost:6005/orders/orders'

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(
      `data from react = ${JSON.stringify(newData)}`
    )

    const response = await fetch(request)
    console.log(response)
    const data = await response.json()

    console.log('伺服器回傳的json資料', data)
    // 要等驗証過，再設定資料(簡單的直接設定)

    // post到order_details
    // 用for loop把訂購商品跟數量寫進order_details

    for (let i = 0; i < cartItems.length; i++) {
      let item = cartItems[i]
      let orderqty = item.qty
      let aucid = item.id.split('-')[0]
      let orderspec = item.id.split('-')[1]
      let eventid = ''
      let proid = ''

      const newData2 = {
        orderid,
        orderspec,
        orderqty,
        eventid,
        proid,
        aucid,
      }
      // 連接的伺服器資料網址
      const url2 =
        'http://localhost:6005/order_details/order_details'

      // 注意資料格式要設定，伺服器才知道是json格式
      const request2 = new Request(url2, {
        method: 'POST',
        body: JSON.stringify(newData2),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })

      console.log(
        `data from react = ${JSON.stringify(newData2)}`
      )
      const response2 = await fetch(request2)
      console.log(response2)
    }

    setFormStep((cur) => cur + 1)
    cookies.remove('auc')
  }

  const [shipfee, setShipFee] = useState(80)

  // Basket2Product

  const [displaycartitems, setDisplayCartItems] = useState(
    []
  )
  const itemsPrice = displaycartitems.reduce(
    (a, c) => a + c.qty * c.eventPrice,
    0
  )
  const [sqleventid, setSqlEventId] = useState('')

  // 去後台SQL撈資料
  async function getEventIdServer() {
    // 連接的伺服器資料網址
    const url = 'http://localhost:6005/auctoin/auction-list'

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    // 再把response變成json
    const data = await response.json()

    let cookieProductArr = cookies.get('auc')
    var temp = []
    if (cookieProductArr) {
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < cookieProductArr.length; j++) {
          let product = cookieProductArr[j]
          setSqlEventId(product.id)

          if (data[i].aucId == product.id.split('-')[0]) {
            let eventtype = product.id.split('-')[1]
            let eventqty = product.qty
            let newDisplay = {
              id: data[i].id,
              eventId: data[i].aucId,
              eventName: data[i].aucName,
              eventPrice: data[i].aucPriceNow,
              eventImg: data[i].aucImg,
              eventType: eventtype,
              qty: eventqty,
            }
            temp.push(newDisplay)
          }
        }
      }
    }
    setDisplayCartItems(temp)
  }

  // 定義coupon
  useEffect(() => {
    getEventIdServer('', '', '')
    const couponcode = getUrlParameter('coupon')
    setCoupon(couponcode)
    if (couponcode == 'tru4r8') {
      setDiscount(300)
    } else if (couponcode == 'DFg2FW') {
      setDiscount(100)
    } else {
      setDiscount(0)
    }
  }, [])
  const [coupon, setCoupon] = useState('')
  const [discount, setDiscount] = useState(0)

  // 從url抓出折扣碼
  function getUrlParameter(sParam) {
    // sParam就是key
    var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=')

      if (sParameterName[0] === sParam) {
        return typeof sParameterName[1] === undefined
          ? true
          : decodeURIComponent(sParameterName[1])
      }
    }
    return false
  }

  return (
    <>
      <div className="c-bg">
        <div className="c-header">
          <Logo className="c-logo" />
        <p>Hello {membername}</p>
        </div>
        <div className="c-crumbs1">
          <a href="./">
            <p>首頁&nbsp;/&nbsp;</p>
          </a>
          <a href="./cart-product">
            <p>購物車&nbsp;/&nbsp;</p>
          </a>
          <p>結帳</p>
        </div>
        {formStep === 0 && (
          <div className="c-step d-flex align-items-center justify-content-center">
            <div className="c-shipment">收件資訊</div>
            <RiArrowRightSLine
              size={30}
              className="c-grayarrow"
            />
            <div className="c-payment">付款資訊</div>
            <RiArrowRightSLine
              size={30}
              className="c-grayarrow"
            />
            <div className="c-complete">完成訂單</div>
          </div>
        )}
        {formStep === 1 && (
          <div className="c-step d-flex align-items-center justify-content-center">
            <div className="c-shipment2">收件資訊</div>
            <RiArrowRightSLine size={30} />
            <div className="c-payment2">付款資訊</div>
            <RiArrowRightSLine
              size={30}
              className="c-grayarrow"
            />
            <div className="c-complete">完成訂單</div>
          </div>
        )}
        {formStep === 2 && (
          <div className="c-step d-flex align-items-center justify-content-center">
            <div className="c-shipment2">收件資訊</div>
            <RiArrowRightSLine size={30} />
            <div className="c-payment3">付款資訊</div>
            <RiArrowRightSLine size={30} />
            <div className="c-complete3">完成訂單</div>
          </div>
        )}

        <div className="d-flex">
          {formStep < 2 && (
            <div className="col-6 mr-auto px-0">
              <form>
                <div>
                  {/* shipping */}
                  {formStep >= 0 && (
                    <section
                      className={
                        formStep === 0
                          ? 'd-block c-shippinginfo1 px-0'
                          : 'd-none'
                      }
                    >
                      <div className="c-shipleft d-flex">
                        <p className="mr-auto">收件資訊</p>
                        <p className="c-f12">*必填項目</p>
                      </div>
                      <div className="c-new py-4">
                        <p>收件人姓名*</p>
                        <input
                          type="text"
                          id="username"
                          value={username}
                          onChange={(event) => {
                            setUserName(event.target.value)
                          }}
                        />
                        <div className="d-flex">
                          <div className="col-6 pl-0">
                            <p className="pt-3">縣市*</p>
                            <select
                              className="w-100"
                              value={country}
                              onChange={(e) => {
                                // 將字串轉成數字
                                setCountry(+e.target.value)
                                // register
                                // selectCity.onChange(e)
                                // 重置township的值
                                setTownship(-1)
                              }}
                            >
                              <option value="-1">
                                選擇縣市
                              </option>
                              {countries.map(
                                (value, index) => (
                                  <option
                                    key={index}
                                    value={index}
                                  >
                                    {value}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                          <div className="col-6 pr-0">
                            <p className="pt-3">地區*</p>
                            <select
                              className="w-100"
                              value={township}
                              onChange={(e) => {
                                // 將字串轉成數字
                                setTownship(+e.target.value)
                              }}
                            >
                              <option value="-1">
                                選擇區域
                              </option>
                              {country > -1 &&
                                townships[country].map(
                                  (value, index) => (
                                    <option
                                      key={index}
                                      value={index}
                                    >
                                      {value}
                                    </option>
                                  )
                                )}
                            </select>
                          </div>
                        </div>
                        <p className="pt-3">收件地址*</p>
                        <input
                          type="text"
                          value={useraddress}
                          id="useraddress"
                          onChange={(event) => {
                            setUserAddress(
                              event.target.value
                            )
                          }}
                        />
                        <p className="pt-3" type="text">
                          聯絡電話*
                        </p>
                        <input
                          type="text"
                          onChange={(event) => {
                            setUserPhone(event.target.value)
                          }}
                        />
                      </div>
                      {/* )} */}
                      <div className="c-shipmethod pt-4">
                        <p className="pb-4">運送方式</p>
                        <label className="c-label-r1 d-flex align-items-baseline pb-3">
                          <input
                            type="radio"
                            name="radio"
                            value="宅配到府 - 運費：NT$ 80"
                            checked
                            onClick={(event) => {
                              setOrderShip(
                                event.target.value
                              )
                              setShipFee(80)
                            }}
                          />
                          <span className="c-label"></span>
                          <p>宅配到府 - 運費：NT$ 80</p>
                        </label>
                        <label className="c-label-r1 d-flex align-items-baseline">
                          <input
                            type="radio"
                            name="radio"
                            value="宅配到府（隔日）- 運費：NT$ 200"
                            onClick={(event) => {
                              setOrderShip(
                                event.target.value
                              )
                              setShipFee(200)
                            }}
                          />
                          <span className="c-label"></span>
                          <p>
                            宅配到府（隔日）- 運費：NT$ 200
                          </p>
                          {/* <a
                            href="##"
                            className="c-store ml-3 pb-0"
                          >
                            選擇門市
                          </a> */}
                        </label>
                      </div>
                    </section>
                  )}
                  {/* payment */}
                  {formStep === 1 && (
                    <section className="c-shippinginfo1 px-0">
                      <div className="c-shipleft d-flex">
                        <p className="mr-auto">付款資訊</p>
                        <p className="c-f12">*必填項目</p>
                      </div>
                      <div className="c-ship2 py-4">
                        <div className="c-paymethod">
                          <p>信用卡*</p>
                          <select
                            value={orderpay}
                            onChange={(event) => {
                              setOrderPay(
                                event.target.value
                              )
                            }}
                          >
                            <option value="VISA">
                              VISA
                            </option>
                            <option value="MASTER">
                              MASTER
                            </option>
                          </select>
                          <p className="pt-3">
                            信用卡號碼*
                          </p>
                          <input
                            type="text"
                            id="cardnumber"
                            value={cardnumber}
                            onChange={(event) => {
                              setCardNumber(
                                event.target.value
                              )
                            }}
                          />
                          <div className="d-flex">
                            <div className="col-3 pl-0">
                              <p className="pt-3">
                                有效期限*
                              </p>
                              <select
                                className="w-100"
                                value={cardexpmon}
                                onChange={(event) => {
                                  setCardExpMon(
                                    event.target.value
                                  )
                                }}
                              >
                                <option
                                  value=""
                                  disabled
                                  selected
                                >
                                  MM
                                </option>
                                <option>01</option>
                                <option>02</option>
                                <option>03</option>
                                <option>04</option>
                                <option>05</option>
                                <option>06</option>
                                <option>07</option>
                                <option>08</option>
                                <option>09</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                              </select>
                            </div>
                            <div className="col-3 pl-1">
                              <p className="pt-3"> </p>
                              <select
                                className="w-100"
                                value={cardexpyr}
                                onChange={(event) => {
                                  setCardExpYr(
                                    event.target.value
                                  )
                                }}
                              >
                                <option
                                  value=""
                                  disabled
                                  selected
                                >
                                  YYYY
                                </option>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                                <option>2025</option>
                                <option>2026</option>
                              </select>
                            </div>
                            <div className="col-3 pr-0 ml-auto">
                              <p className="pt-3">
                                安全碼*
                              </p>
                              <input />
                            </div>
                            <a
                              href="##"
                              className="ml-2 mt-auto c-store px-0 pb-0"
                            >
                              這是什麼?
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* 通訊選項 */}
                      <p className="c-shipleft mt-4">
                        通訊選項
                      </p>
                      <div className="c-shipmethod pt-4">
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={state.checkedA}
                              onChange={handleChange}
                              name="checkedA"
                              style={{ color: 'black' }}
                            />
                          }
                          label={
                            <span
                              style={{
                                fontFamily:
                                  'Noto Sans TC Medium',
                              }}
                            >
                              儲存我的收件資訊，以便未來的訂購使用
                            </span>
                          }
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={state.checkedB}
                              onChange={handleChange}
                              name="checkedB"
                              style={{ color: 'black' }}
                            />
                          }
                          label={
                            <span
                              style={{
                                fontFamily:
                                  'Noto Sans TC Medium',
                              }}
                            >
                              我願意收到活動及商品的相關優惠資訊
                            </span>
                          }
                        />
                      </div>
                    </section>
                  )}
                  {formStep < 2 && (
                    <div>
                      <p className="c-f12 mt-3">
                        點選「確認付款」表示您接受我們的
                        <a
                          href="##"
                          className="c-store pb-0"
                        >
                          付費＆退貨條款
                        </a>
                      </p>
                      {renderButton()}
                      <div className="c-checkout1 pt-3 pb-5 d-flex align-items-center">
                        <FaLock size={20} />
                        <p className="c-lock ml-1">
                          本賣場使用綠界科技安全結帳系統，保障您的資安
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>
          )}

          {formStep < 2 && (
            <div className="col-5 px-0">
              <Basket2Auction
                displaycartitems={displaycartitems}
              ></Basket2Auction>
              <div className="c-bb d-flex pb-4 px-3 mb-4">
                <p className="mr-auto">商品小計</p>
                <p>NT$ {itemsPrice}</p>
              </div>
              <div className="c-bb d-flex pb-4 px-3 mb-4">
                <p className="mr-auto">運費小計</p>
                <p>NT$ {shipfee}</p>
              </div>
              <div
                className={
                  coupon == 'tru4r8' ? '' : 'd-none'
                }
              >
                <div className="c-bb d-flex align-items-baseline pb-4 px-3 mb-4 ">
                  <p className="mr-3">折扣碼 - 週年慶</p>
                  <a
                    href="javascript:void(0)"
                    className="mr-auto c-store pb-0"
                    onClick={() => {
                      setCoupon()
                      setDiscount(0)
                    }}
                  >
                    移除
                  </a>
                  <p>- NT$ 300</p>
                </div>
              </div>
              <div
                className={
                  coupon == 'DFg2FW' ? '' : 'd-none'
                }
              >
                <div className="c-bb d-flex align-items-baseline pb-4 px-3 mb-4 ">
                  <p className="mr-3">折扣碼 - 特賣</p>
                  <a
                    href="javascript:void(0)"
                    className="mr-auto c-store pb-0"
                    onClick={() => {
                      setCoupon()
                      setDiscount(0)
                    }}
                  >
                    移除
                  </a>
                  <p>- NT$ 100</p>
                </div>
              </div>

              <div className="c-bb1 d-flex pb-3 px-3 mb-4">
                <p className="h5 mr-auto">總計</p>
                <p className="h5">
                  NT$ {itemsPrice + shipfee - discount}
                </p>
              </div>
              {formStep === 1 && (
                <section>
                  <div className="mt-5">
                    <div className="c-shipleft">
                      <div className="px-3  d-flex">
                        <p className="mr-auto">付款資訊</p>
                        <p>
                          <a
                            href="##"
                            className="c-store pb-0"
                            onClick={goToPreviousStep}
                          >
                            回上一頁修改
                          </a>
                        </p>
                      </div>
                    </div>
                    <div class="c-shipdetail px-3 pb-5">
                      <p>
                        收件人：
                        {username}
                      </p>
                      <p>收件地址：{whole_address}</p>
                      <p>聯絡電話：{userphone}</p>
                      <p>寄送方式：{ordership}</p>
                    </div>
                  </div>
                </section>
              )}
            </div>
          )}
          {formStep === 2 && (
            <CartAuctionFinish
              cartItems={cartItems}
              sentorder={sentorder}
              displaycartitems={displaycartitems}
              discount={discount}
            ></CartAuctionFinish>
          )}
        </div>
      </div>
    </>
  )
}

export default CartFormProduct

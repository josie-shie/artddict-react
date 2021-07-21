import { React, useState, useEffect } from 'react'
import { ReactComponent as Logo } from '../../../pics/logo-bk.svg'
import { withRouter } from 'react-router-dom'

import '../../../bootstrap/css/bootstrap.css'
import '../styles/cart-finish.scss'

// icon
import { FaLock } from 'react-icons/fa'
import { RiArrowRightSLine } from 'react-icons/ri'

function CartEventFinish(props) {
  const orderId = props.sentorder
  const orderItems = props.displaycartitems
  const discount = props.discount

  // 定義要列出的資料
  // orders內容
  const [orderbyid, setOrderById] = useState('')
  const [username, setUsername] = useState('')
  const [address, setAddress] = useState('')
  const [mobile, setMobile] = useState('')
  const [shipmethod, setShipMethod] = useState('')
  const [credittype, setCreditType] = useState('')
  const [date, setDate] = useState('')
  const [total, setTotal] = useState('')
  // order_details內容
  const [proid, setProId] = useState('')
  const [proqty, setProQty] = useState('')

  // const [orderitems, setOrderItems] = useState([])

  async function getOrdersServer(orderId) {
    // 取得剛剛父層寫入的訂單 orders
    // 連接的伺服器資料網址
    const url = 'http://localhost:6005/orders/' + orderId

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    // fetch是呼叫後台api, response=得到的資料
    const response = await fetch(request)
    console.log(response)
    const data = await response.json()
    console.log(data)

    // 設定資料
    setOrderById(data.orderId)
    setUsername(data.username)
    setAddress(data.userAddress)
    setMobile(data.userPhone)
    setShipMethod(data.orderShip)
    setCreditType(data.orderPay)
    let tempdate = new Date(data.created_at)
    let newdate =
      tempdate.getFullYear() +
      '-' +
      parseInt(tempdate.getMonth() + 1) +
      '-' +
      tempdate.getDate()
    setDate(newdate)
    setTotal(data.orderPrice)

    // 取得order_details
    // 連接的伺服器資料網址
    const url2 =
      'http://localhost:6005/order_details/' + orderId

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request2 = new Request(url2, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    // fetch是呼叫後台api, response=得到的資料
    const response2 = await fetch(request2)
    console.log(response2)
    const data2 = await response2.json()
    console.log(data2)

    // 設定資料
    setProId(data2.eventId)
    setProQty(data2.orderQty)
  }

  // 呼叫剛剛的assync func
  useEffect(() => {
    getOrdersServer(orderId)
  }, [])

  const orderItemsDisplay = orderItems.map((orderItems) => {
    return (
      <td>
        <div class="c-td-p1 d-flex align-items-center">
          <img
            src={`http://localhost:6005/eventpic/event/${orderItems.eventImg}`}
            alt=""
          />
          <div className="col ml-4">
            <p className="pb-2">{orderItems.eventName}</p>
            <p className="c-fgray">
              活動編號 # {orderItems.eventId}
            </p>
          </div>
          <p
            className={
              orderItems.eventType !== '' ? 'd-none' : 'col'
            }
          ></p>
          <p
            className={
              orderItems.eventType === '' ? 'd-none' : 'col'
            }
          >
            票種：{orderItems.eventType}
          </p>
          <p className="col">數量：{orderItems.qty}</p>
          <p className="col">
            NT$ {orderItems.eventPrice * orderItems.qty}
          </p>
        </div>
      </td>
    )
  })

  const orderDisplay = (
    <>
      <div>
        <table className="c-order">
          <thead>
            <th>訂單明細</th>
          </thead>
          <tbody>
            <tr>
              <td>訂單編號：{orderbyid}</td>
            </tr>

            <tr>
              <td className="c-td-dark">
                訂單日期：{date}
              </td>
            </tr>
            {/* <tr>
                <td>商品小計：NT$ 1,560</td>
              </tr>
              <tr>
                <td className="c-td-dark">
                  運費小計：NT$ 80
                </td>
              </tr>
               */}
            <tr>
              <td>折扣碼：- NT$ {discount}</td>
            </tr>
            <tr>
              <td className="c-td-dark">
                總價：NT$ {total}
              </td>
            </tr>
            <tr>
              <td className="d-flex flex-column">
                {orderItemsDisplay}
              </td>
            </tr>
          </tbody>
        </table>
        <table className="c-order mt-5">
          <thead>
            <th>付款資訊</th>
          </thead>
          <tbody>
            <tr>
              <td>信用卡別：{credittype}</td>
            </tr>
            {/* <tr>
                <td className="c-td-dark">
                  信用卡號：XXXX-XXXX-XXXX-2348
                </td>
              </tr>
              <tr>
                <td>有效期限：XX-2025</td>
              </tr> */}
            <tr>
              <td className="c-td-dark">
                刷卡金額：NT$ {total}
              </td>
            </tr>
          </tbody>
        </table>
        <table className="c-order mt-5">
          <thead>
            <th>收件資訊</th>
          </thead>
          <tbody>
            <tr>
              <td>收件人：{username}</td>
            </tr>
            <tr>
              <td className="c-td-dark">
                收件地址：{address}
              </td>
            </tr>
            <tr>
              <td>聯絡電話：{mobile}</td>
            </tr>
            <tr>
              <td className="c-td-dark">
                寄送方式：{shipmethod}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )

  return (
    <>
      <div className="c-bg2">
        <div className="c-thank">
          <p className="h5">感謝您的訂購！</p>
          <p className="pt-2">
            您的訂單資訊如下，並已同步寄到您填寫的e-mail信箱
          </p>
        </div>

        {/* 訂單資訊 */}
        {orderDisplay}

        <div className="c-finish-bottom">
          <a href="##" className="">
            <div className="c-finbtn1">
              <p>查詢訂單</p>
            </div>
          </a>
          <a href="##" className="ml-5">
            <div className="c-finbtn">
              <p>回到賣場</p>
            </div>
          </a>
        </div>
        <div className="c-checkout1 pt-3 pb-5 d-flex align-items-center">
          <FaLock size={20} />
          <p className="c-lock ml-3">
            更多資訊請參考
            <a href="##" className="c-store pb-0">
              隱私權條款
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default withRouter(CartEventFinish)

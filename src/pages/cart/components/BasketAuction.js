import React, { useState, useEffect } from 'react'
import Cookies from 'universal-cookie'
import AuctionCountDown from './AuctionCountDown'

// icon
import { FaRegEdit } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'
import { RiDeleteBinLine } from 'react-icons/ri'

function BasketEvent() {
  const cookies = new Cookies()
  const [displaycartitems, setDisplayCartItems] = useState(
    []
  )
  const [sqleventid, setSqlEventId] = useState('')
  const cookiesLength = cookies.get('auc')

  /**
   * 當頁面Load時，讀取Cookie值並更新至cartItems
   */
  useEffect(() => {
    let tempArr = []
    let tempArrId = []
    let cookieProductArr = cookies.get('auc') // get Cookies
    console.log(cookieProductArr)

    if (cookieProductArr) {
      for (let i = 0; i < cookieProductArr.length; i++) {
        let product = cookieProductArr[i]
        tempArr.push(product)
        tempArrId.push(product.id.split('-')[0])
      }
    }
  }, [])

  const itemsPrice = displaycartitems.reduce(
    (a, c) => a + c.qty * c.eventPrice,
    0
  )
  const totalPrice = itemsPrice

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
    console.log(cookieProductArr)
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
    console.log(displaycartitems)
  }

  useEffect(() => {
    getEventIdServer('', '', '')
  }, [])

  return (
    <div>
      {displaycartitems.length === 0 && (
        <div className="c-empty">您的購物車是空的</div>
      )}
      {displaycartitems.map((item) => (
        <>
          <div className="c-product-r1 d-block d-flex py-5 pl-4">
            <div className="c-img150">
              <img
                src={`http://localhost:6005/Aucpics/auc/${item.eventImg}`}
                alt=""
              />
            </div>
            <div className="c-product1detail d-flex flex-column justify-content-between col-4 pl-4">
              <div>
                <p className="h4">{item.eventName}</p>
                <p className="c-pid">
                  拍賣編號 # {item.eventId}
                </p>
                <p className="mt-2 c-countdown">
                  <AuctionCountDown />
                </p>
                <p
                  className={
                    item.eventType === ''
                      ? 'd-none'
                      : 'mt-2'
                  }
                >
                  票種：{item.eventType}
                </p>
              </div>
              <div className="d-lg-flex">
                <a
                  href="##"
                  className="c-product-a d-flex align-items-center"
                >
                  <FaRegEdit size={20} />
                  <p className="c-store2 ml-1 mr-4">
                    拍賣細節
                  </p>
                </a>
              </div>
            </div>
            <div className="c-price d-flex flex-column align-items-center col-2">
              <p className="mb-5">價格</p>
              <p>NT$ {item.eventPrice}</p>
            </div>
            <div className="c-quantity d-flex flex-column align-items-center col-2">
              <p className="mb-5">數量</p>
              <p>{item.qty}</p>
            </div>
            <div className="c-total d-flex flex-column align-items-center col-2">
              <p className="mb-5">小計</p>
              <p>NT$ {item.qty * item.eventPrice}</p>
            </div>
          </div>
        </>
      ))}

      <div className="d-flex justify-content-between mt-3 pt-3 pb-5">
        <div className>
          <a href="##" className="c-store2 mr-5">
            聯絡客服
          </a>
          <a href="##" className="c-store2 d-block mt-2">
            運費＆退貨條款
          </a>
        </div>
        <div>
          <p>
            總計：
            <sapn className="h4">NT$ {totalPrice}</sapn>
          </p>
          <a
            href="##"
            className="c-store2 d-block ml-5 mt-3"
          >
            選取你的折扣碼
          </a>
        </div>
      </div>
      <div className="c-checkout pt-4 d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <FaLock size={20} />
          <p className="c-lock ml-1">
            本賣場使用綠界科技安全結帳系統，保障您的資安
          </p>
        </div>
        <button
          disabled={cookiesLength.length == 0}
          className="c-checkoutbtn2"
        >
          <a href="./cart-form-auction">
            <p>結帳</p>
          </a>
        </button>
      </div>
    </div>
  )
}

export default BasketEvent

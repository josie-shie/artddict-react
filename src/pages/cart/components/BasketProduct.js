import React, { useState, useEffect } from 'react'
import Cookies from 'universal-cookie'
import { Modal, Button } from 'react-bootstrap'
import $ from 'jquery'

// icon
import { FaRegEdit } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'
import { RiDeleteBinLine } from 'react-icons/ri'

function BasketEvent() {
  //假設會員id
  const [memberid, setMemberId] = useState('')

  //驗證身分
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
    setMemberId(data.id)
  }

  useEffect(() => {
    //驗證身分
    getjwtvertifyFromServer()
  }, [])

  // Modal 顯示狀態
  const [show, setShow] = useState(false)
  // Modal 開關 function
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // Coupon Modal 開關
  const [showcoupon, setShowCoupon] = useState(false)
  const handleClose2 = () => {
    setShowCoupon(false)
    // 用這個func改變coupon的值
    setCoupon($('#coupon').val())
  }
  const handleShow2 = () => setShowCoupon(true)

  // 折扣碼
  const [coupon, setCoupon] = useState('')

  // 確認有無登入
  const checklogin = () => {
    if (!memberid) {
      console.log('請先登入會員')
      handleShow()
    } else {
      window.location.href =
        // 把折扣碼的key跟value傳到下一頁
        './cart-form-product?coupon=' + coupon
    }
  }

  const cookies = new Cookies()
  const [displaycartitems, setDisplayCartItems] = useState(
    []
  )
  const [sqleventid, setSqlEventId] = useState('')

  /**
   * 當頁面Load時，讀取Cookie值並更新至cartItems
   */
  useEffect(() => {
    let tempArr = []
    let tempArrId = []
    let cookieProductArr = cookies.get('product') // get Cookies

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
    const url = 'http://localhost:6005/product/product-list'

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

    let cookieProductArr = cookies.get('product')
    var temp = []
    if (cookieProductArr) {
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < cookieProductArr.length; j++) {
          let product = cookieProductArr[j]
          setSqlEventId(product.id)

          if (data[i].proId == product.id.split('-')[0]) {
            let eventtype = product.id.split('-')[1]
            let eventqty = product.qty
            let proImg = data[i].proImg.replace(
              /[\[\]"]+/g,
              ''
            )
            let newDisplay = {
              id: data[i].id,
              eventId: data[i].proId,
              eventName: data[i].proName,
              eventPrice: data[i].proPrice,
              eventImg: proImg,
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

  useEffect(() => {
    getEventIdServer('', '', '')
  }, [])

  /**
   * 更新 event Cookie
   *
   * @param {Object} event 欲改變的目標 event.
   * @param {number} quantityNum 欲更新event.qty到的數字.
   * @param {string} type 根據不同type，event.qty 更新方法不同
   *
   *
   */
  const onCookie = (eventid, quantityNum, type) => {
    console.log(eventid)
    let cookieEventId = eventid + '-' + type
    let updateCookie = []
    let cookieEvent = cookies.get('product') // 取得 product cookie

    if (cookieEvent) {
      // 如果有已存在的 event cookie
      // 查看cookie裡面的 event id
      const idSet = new Set()
      for (let i in cookieEvent) {
        idSet.add(cookieEvent[i].id)
      }
      // event 在 event cookie 中
      if (idSet.has(cookieEventId)) {
        for (let i in cookieEvent) {
          if (cookieEvent[i].id == cookieEventId) {
            // 如果event是從Input,數量直接變成新數字
            cookieEvent[i].qty = quantityNum
          }
        }
      } else {
        // 如果被改變的event 不在 event cookie 中
        // 初始數量為1
        let eventjson = {}
        eventjson.id = cookieEventId
        eventjson.qty = quantityNum
        cookieEvent.push(eventjson)
      }
      // 如果被改變後的event數量>0，加入在cookie 中
      for (let i in cookieEvent) {
        if (cookieEvent[i].qty > 0) {
          updateCookie.push(cookieEvent[i])
        }
      }
    } else {
      // 如果沒有已存在的 event cookie
      // 初始數量為1
      let eventjson = {}
      eventjson.id = cookieEventId
      eventjson.qty = quantityNum
      updateCookie.push(eventjson)
    }

    cookies.set('product', updateCookie, { path: '/' }) //更新Cookie
  }

  /**
   * 更新購物車數量
   *
   * @param {Object} event 欲改變的目標 event
   * @param {number} quantityNum event.qty到的數字.
   *
   */
  const onCartNumChange = (eventid, quantityNum, type) => {
    const exist = displaycartitems.find(
      (x) => x.eventId === eventid
    )
    console.log(displaycartitems)
    onCookie(eventid, quantityNum, type)
    if (quantityNum <= 0) {
      setDisplayCartItems(
        displaycartitems.filter(
          (x) => x.eventId !== eventid
        )
      )
    } else {
      setDisplayCartItems(
        displaycartitems.map((x) =>
          x.eventId === eventid
            ? { ...exist, qty: Number(quantityNum) }
            : x
        )
      )
    }
  }

  /**
   * 移出購物車
   *
   * @param {Object} event 欲改變的目標 event.
   *
   */
  const onDelete = (eventid, quantityNum, type) => {
    onCookie(eventid, 0, type)
    const exist = displaycartitems.find(
      (x) =>
        x.eventId + '-' + x.eventType ===
        eventid + '-' + type
    )
    if (exist.qty >= 1) {
      setDisplayCartItems(
        displaycartitems.filter(
          (x) =>
            x.eventId + '-' + x.eventType !==
            eventid + '-' + type
        )
      )
    }
  }

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
                src={`http://localhost:6005/productpics/${item.eventImg}`}
                alt=""
              />
            </div>
            <div className="c-product1detail d-flex flex-column justify-content-between col-4 pl-4">
              <div>
                <p className="h4">{item.eventName}</p>
                <p className="c-pid">
                  商品編號 # {item.eventId}
                </p>

                <p
                  className={
                    item.eventType === ''
                      ? 'd-none'
                      : 'mt-2'
                  }
                >
                  尺寸：{item.eventType}
                </p>
              </div>
              <div className="d-lg-flex">
                <a
                  href={`http://localhost:3000/product/product-list/product-detail/${item.id}`}
                  target="_blank"
                  className="c-product-a d-flex align-items-center"
                  rel="noreferrer"
                >
                  <FaRegEdit size={20} />
                  <p className="c-store2 ml-1 mr-4">
                    商品細節
                  </p>
                </a>
                <a
                  href="##"
                  className="c-product-a d-flex align-items-center"
                >
                  <RiDeleteBinLine size={20} />
                  <p
                    onClick={() =>
                      onDelete(
                        item.eventId,
                        0,
                        item.eventType
                      )
                    }
                    className="c-store2 ml-1 mr-4"
                  >
                    移除商品
                  </p>
                </a>
              </div>
            </div>
            <div className="c-price d-flex flex-column align-items-center col-2">
              <p className="mb-5">價格</p>
              <p>NT$ {item.eventPrice}</p>
            </div>
            <div className="c-quantity d-flex flex-column align-items-center col-2">
              <p className="mb-3 pb-3">數量</p>
              <div className="c-qbox">
                <input
                  type="number"
                  value={item.qty}
                  onChange={(evt) => {
                    onCartNumChange(
                      item.eventId,
                      evt.target.value,
                      item.eventType
                    )
                  }}
                />
              </div>
            </div>
            <div className="c-total d-flex flex-column align-items-center col-2">
              <p className="mb-5">小計</p>
              <p>NT$ {item.qty * item.eventPrice}</p>
            </div>
          </div>
        </>
      ))}

      <div className="d-flex justify-content-between mt-3 pt-3 pb-5">
        <div>
          <a href="##" className="c-store2">
            聯絡客服
          </a>
          <a href="##" className="c-store2 d-block mt-2">
            運費＆退貨條款
          </a>
        </div>
        <div className="d-flex flex-column justify-content-end">
          <p className="d-flex justify-content-end">
            總計：
            <sapn className="h4">NT$ {totalPrice}</sapn>
          </p>
          <p
            className={
              coupon == 'tru4r8'
                ? 'd-flex justify-content-end'
                : 'd-none'
            }
          >
            週年慶折扣：- NT$ 300
          </p>
          <p
            className={
              coupon == 'DFg2FW'
                ? 'd-flex justify-content-end'
                : 'd-none'
            }
          >
            特賣折扣：- NT$ 100
          </p>
          <p className="d-flex justify-content-end mt-2">
            <a
              href="##"
              className="c-store2"
              onClick={handleShow2}
            >
              輸入折扣碼
            </a>
          </p>
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
          disabled={displaycartitems.length == 0}
          onClick={checklogin}
          className="c-checkoutbtn2"
        >
          <a href="javascript:void(0)">
            <p>結帳</p>
          </a>
        </button>
      </div>
      <Modal
        centered
        show={show}
        onHide={handleClose}
        id="eventModal"
      >
        <Modal.Header closeButton>
          <Modal.Title>請登入會員</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>您目前還未登入會員，請登入會員進行結帳</div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="button"
            className="e-btn-s e-modal-close"
            onClick={handleClose}
          >
            關閉
          </Button>
          <Button
            type="button"
            className="e-btn-s e-modal-del"
            onClick={() => {
              window.location.href = './user-login'
            }}
          >
            登入
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        centered
        show={showcoupon}
        onHide={handleClose2}
        id="eventModal"
      >
        <Modal.Header closeButton>
          <Modal.Title>請輸入折扣碼</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" id="coupon" />
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="button"
            className="e-btn-s e-modal-close"
            onClick={handleClose2}
          >
            關閉
          </Button>
          <Button
            type="button"
            className="e-btn-s e-modal-del"
            onClick={handleClose2}
          >
            確認
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default BasketEvent

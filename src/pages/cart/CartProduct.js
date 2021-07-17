import React, { useState, useEffect } from 'react'
import { ReactComponent as Logo } from '../../pics/logo-bk.svg'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import '../../bootstrap/css/bootstrap.css'
import './styles/cart-product.scss'
import Cookies from 'universal-cookie'

// demo
<<<<<<< Updated upstream
import BasketProduct from './demo/BasketProduct'
=======
import BasketProduct from './components/BasketProduct'
>>>>>>> Stashed changes

function CartEvent() {
  // const { products } = fakedata
  const [cartItems, setCartItems] = useState([])
  const cookies = new Cookies()

  async function getEventServer() {
    const url = 'http://localhost:6005/product/'

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
  }

  // 呼叫剛剛的assync func
  useEffect(() => {
    getEventServer()
  }, [])

  /**
   * 當頁面Load時，讀取Cookie值並更新至cartItems
   */
  useEffect(() => {
    let tempArr = []
    let cookieProductArr = cookies.get('product') // get Cookies
    if (cookieProductArr) {
      for (let i = 0; i < cookieProductArr.length; i++) {
        let product = cookieProductArr[i]
        tempArr.push(product)
      }
      setCartItems(tempArr)
    }
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
  const onCookie = (event, quantityNum, type) => {
    let updateCookie = []
    let cookieEvent = cookies.get('product') // 取得 event cookie
    if (cookieEvent) {
      // 如果有已存在的 event cookie
      // 查看cookie裡面的 event id
      const idSet = new Set()
      for (let i in cookieEvent) {
        idSet.add(cookieEvent[i].id)
      }
      // 如果被改變的 event 在 event cookie 中
      if (idSet.has(event.id)) {
        for (let i in cookieEvent) {
          if (cookieEvent[i].id == event.id) {
            if (type == 'add')
              // 如果event是從AddToCart,數量+1
              cookieEvent[i].qty += 1
            else {
              // 如果event是從Input,數量直接到指定數字
              cookieEvent[i].qty = Number(quantityNum)
            }
          }
        }
      } else {
        // 如果被改變的product 不在 product cookie 中
        // 初始數量為1
        event.qty = 1
        cookieEvent.push(event)
      }
      // 如果被改變後的product數量>0，加入在cookie 中
      for (let i in cookieEvent) {
        if (cookieEvent[i].qty > 0) {
          updateCookie.push(cookieEvent[i])
        }
      }
    } else {
      // 如果沒有已存在的 product cookie
      // 初始數量為1
      event.qty = 1
      updateCookie.push(event)
    }
    cookies.set('product', updateCookie) //更新Cookie
  }

  /**
   * 加進購物車
   *
   * @param {Object} product 欲改變的目標 product.
   * @param {number} quantityNum 欲更新product.qty到的數字.
   *
   */
  const onAddToCart = (event, quantityNum) => {
    onCookie(event, quantityNum, 'add')
    const exist = cartItems.find((x) => x.id === event.id)
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === event.id
            ? { ...exist, qty: exist.qty + 1 }
            : x
        )
      )
    } else {
      setCartItems([...cartItems, { ...event, qty: 1 }])
    }
  }

  /**
   * 更新購物車數量
   *
   * @param {Object} event 欲改變的目標 event
   * @param {number} quantityNum event.qty到的數字.
   *
   */
  const onCartNumChange = (event, quantityNum) => {
    console.log(event)
    console.log(quantityNum)
    const exist = cartItems.find((x) => x.id === event.id)
    onCookie(event, quantityNum, 'set')
    if (quantityNum <= 0) {
      setCartItems(
        cartItems.filter((x) => x.id !== event.id)
      )
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === event.id
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
  const onDelete = (event) => {
    onCookie(event, 0, 'set')
    const exist = cartItems.find((x) => x.id === event.id)
    if (exist.qty >= 1) {
      setCartItems(
        cartItems.filter((x) => x.id !== event.id)
      )
    }
  }

  const [cartItems2, setCartItems2] = useState([])

  return (
    <>
      <div className="c-bg">
        <div className="c-header">
          <Logo className="c-logo" />
          <p>Hello JoJo</p>
        </div>
        <div className="c-crumbs">
          <p>首頁&nbsp;/&nbsp;</p>
          <p>購物車</p>
        </div>
        <div className="c-tabs">
          <div className="c-tab-product">
            <Nav.Link as={Link} to="/cart-product">
              美術館商品
            </Nav.Link>
          </div>
          <div className="c-tab-event">
            <Nav.Link as={Link} to="/cart-event">
              活動票卷
            </Nav.Link>
          </div>
          <div className="c-tab-auction">
            <Nav.Link as={Link} to="/cart-auction">
              得標商品
            </Nav.Link>
          </div>
        </div>
        <BasketProduct
          cartItems={cartItems}
          onAddToCart={onAddToCart}
          onCartNumChange={onCartNumChange}
          onDelete={onDelete}
        ></BasketProduct>
      </div>
    </>
  )
}

export default CartEvent

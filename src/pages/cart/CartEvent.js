import React, { useState, useEffect } from 'react'
import { ReactComponent as Logo } from '../../pics/logo-bk.svg'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import '../../bootstrap/css/bootstrap.css'
import './styles/cart-event.scss'
import Cookies from 'universal-cookie'

// demo
import BasketEvent from './components/BasketEvent'

function CartEvent() {
  // const { products } = fakedata
  const [cartItems, setCartItems] = useState([])
  const cookies = new Cookies()

  async function getEventServer() {
    const url = 'http://localhost:6005/event/'

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
    let cookieProductArr = cookies.get('event') // get Cookies
    if (cookieProductArr) {
      for (let i = 0; i < cookieProductArr.length; i++) {
        let product = cookieProductArr[i]
        tempArr.push(product)
      }
      setCartItems(tempArr)
    }
  }, [])

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
          <div className="c-tab-product2">
            <Nav.Link as={Link} to="/cart-product">
              美術館商品
            </Nav.Link>
          </div>
          <div className="c-tab-event2">
            <Nav.Link as={Link} to="/cart-event">
              活動票卷
            </Nav.Link>
          </div>
          <div className="c-tab-auction2">
            <Nav.Link as={Link} to="/cart-auction">
              得標商品
            </Nav.Link>
          </div>
        </div>
        <BasketEvent cartItems={cartItems}></BasketEvent>
      </div>
    </>
  )
}

export default CartEvent

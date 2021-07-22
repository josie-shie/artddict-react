import React, { useState, useEffect } from 'react'
import { ReactComponent as Logo } from '../../pics/logo-bk.svg'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import '../../bootstrap/css/bootstrap.css'
import './styles/cart-auction.scss'
import Cookies from 'universal-cookie'

// demo
import BasketAuction from './components/BasketAuction'

function CartAuction() {
  const [membername, setMemberName] = useState('')

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
    setMemberName(data.name)
  }

  useEffect(() => {
    //驗證身分
    getjwtvertifyFromServer()
  }, [])

  // const { products } = fakedata
  const [cartItems, setCartItems] = useState([])
  const cookies = new Cookies()

  async function getEventServer() {
    const url = 'http://localhost:6005/auctoin/auction-list'

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
    let cookieProductArr = cookies.get('auc') // get Cookies
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
          <Nav.Link as={Link} to="/" className="p-0">
            <Logo className="c-logo" />
          </Nav.Link>
          <p className={!membername ? 'd-none' : 'd-block'}>
            Hello {membername}
          </p>
        </div>
        <div className="c-crumbs">
          <a href="./">
            <p>首頁&nbsp;/&nbsp;</p>
          </a>
          <a href="./cart-auction">
            <p>購物車&nbsp;/&nbsp;</p>
          </a>
        </div>
        <div className="c-tabs">
          <div className="c-tab-product3">
            <Nav.Link as={Link} to="/cart-product">
              美術館商品
            </Nav.Link>
          </div>
          <div className="c-tab-event3">
            <Nav.Link as={Link} to="/cart-event">
              活動票卷
            </Nav.Link>
          </div>
          <div className="c-tab-auction3">
            <Nav.Link as={Link} to="/cart-auction">
              得標商品
            </Nav.Link>
          </div>
        </div>
        <BasketAuction
          cartItems={cartItems}
        ></BasketAuction>
      </div>
    </>
  )
}

export default CartAuction

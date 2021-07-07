import React, { useState } from 'react'
import { ReactComponent as Logo } from '../../pics/logo-bk.svg'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import '../../bootstrap/css/bootstrap.css'
import './styles/cart-product.scss'

// demo
import fakedata from './data/fakedata'
import Main from './demo/Main'
import Basket from './demo/Basket'

// // imgae
// import img1 from './img/1.png'
// import img2 from './img/2.png'

// // icon
// import { FaRegEdit } from 'react-icons/fa'
// import { FaLock } from 'react-icons/fa'
// import { RiDeleteBinLine } from 'react-icons/ri'

function CartProduct() {
  const { products } = fakedata
  const [cartItems, setCartItems] = useState([])

  // 加進購物車/加1
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id
            ? { ...exist, qty: exist.qty + 1 }
            : x
        )
      )
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }
  // 移出購物車/減1
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist.qty === 1) {
      setCartItems(
        cartItems.filter((x) => x.id !== product.id)
      )
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id
            ? { ...exist, qty: exist.qty - 1 }
            : x
        )
      )
    }
  }
  // 移出購物車
  const onDelete = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist.qty >= 1) {
      setCartItems(
        cartItems.filter((x) => x.id !== product.id)
      )
    }
  }

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

        <Main products={products} onAdd={onAdd}></Main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
        ></Basket>
      </div>
    </>
  )
}

export default CartProduct

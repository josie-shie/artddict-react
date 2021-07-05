import React from 'react'
import { ReactComponent as Logo } from '../../pics/logo-bk.svg'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import '../../bootstrap/css/bootstrap.css'
import './styles/cart-product.scss'

// imgae
import img1 from './img/1.png'
import img2 from './img/2.png'

// icon
import { FaRegEdit } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'
import { RiDeleteBinLine } from 'react-icons/ri'

function CartProduct() {
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
        <div className="c-productlist mt-5">
          <div className="c-product-r1 d-flex pb-5">
            <img className="col-2" src={img1} />
            <div className="c-product1detail d-flex flex-column justify-content-between col-4">
              <div>
                <p className="h4">梵谷自畫像T-Shirt</p>
                <p className="c-pid">商品編號 # 200123</p>
                <p className="mt-3">尺寸：S</p>
              </div>
              <div className="d-flex">
                <a
                  href="#"
                  className="c-product-a d-flex align-items-center"
                >
                  <FaRegEdit size={20} />
                  <p className="c-store2 ml-1 mr-4">
                    商品細節
                  </p>
                </a>
                <a
                  href="#"
                  className="c-product-a d-flex align-items-center"
                >
                  <FaRegEdit size={20} />
                  <p className="c-store2 ml-1 mr-4">
                    移除商品
                  </p>
                </a>
              </div>
            </div>

            <div className="c-price d-flex flex-column align-items-center col-2">
              <p className="mb-5">價格</p>
              <p>NT$ 780</p>
            </div>
            <div className="c-quantity d-flex flex-column align-items-center col-2">
              <p className="mb-3 pb-3">數量</p>
              <div className="c-qbox">1</div>
            </div>
            <div className="c-total d-flex flex-column align-items-center col-2">
              <p className="mb-5">小計</p>
              <p>NT$ 780</p>
            </div>
          </div>
          <div className="c-product-r1 d-flex pt-5 pb-5">
            <img className="col-2" src={img2} />
            <div className="c-product1detail d-flex flex-column justify-content-between col-4">
              <div>
                <p className="h4">梵谷自畫像T-Shirt</p>
                <p className="c-pid">商品編號 # 200123</p>
                <p className="mt-3">尺寸：S</p>
              </div>
              <div className="d-flex">
                <a
                  href="#"
                  className="c-product-a d-flex align-items-center"
                >
                  <FaRegEdit size={20} />
                  <p className="c-store2 ml-1 mr-4">
                    商品細節
                  </p>
                </a>
                <a
                  href="#"
                  className="c-product-a d-flex align-items-center"
                >
                  <FaRegEdit size={20} />
                  <p className="c-store2 ml-1 mr-4">
                    移除商品
                  </p>
                </a>
              </div>
            </div>

            <div className="c-price d-flex flex-column align-items-center col-2">
              <p className="mb-5">價格</p>
              <p>NT$ 780</p>
            </div>
            <div className="c-quantity d-flex flex-column align-items-center col-2">
              <p className="mb-3 pb-3">數量</p>
              <div className="c-qbox">1</div>
            </div>
            <div className="c-total d-flex flex-column align-items-center col-2">
              <p className="mb-5">小計</p>
              <p>NT$ 780</p>
            </div>
          </div>
          {/* 總金額＆折價卷 */}
          <div className="d-flex justify-content-between mt-3 pt-3 pb-5">
            <div className>
              <a href="#" className="c-store2 mr-5">
                聯絡客服
              </a>
              <a href="#" className="c-store2 d-block mt-2">
                運費＆退貨條款
              </a>
            </div>
            <div>
              <p>
                總計：<sapn className="h4">NT$ 1,560</sapn>
              </p>
              <a
                href="#"
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
            <a href="./cart-shipping">
              <div className="c-checkoutbtn">
                <p>結帳</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartProduct

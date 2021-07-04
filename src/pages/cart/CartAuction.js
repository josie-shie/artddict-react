import React from 'react'
import { ReactComponent as Logo } from '../../pics/logo-bk.svg'

import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import '../../bootstrap/css/bootstrap.css'
import './styles/cart-auction.scss'

// img
import img4 from './img/4.png'

// icon
import { FaRegEdit } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'

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
        <div className="c-productlist mt-5">
          <div className="c-product-r1 d-flex pb-5">
          <img className="col-2" src={img4} />
            <div className="c-product1 d-flex col-4">
              <div className="c-product1detail d-flex flex-column justify-content-between">
                <div>
                  <p className="h4">
                    BTS 麥當勞飲料杯<br/>防彈少年團聯名 不防彈款
                  </p>
                  <p className="c-pid">拍賣編號 # 200123</p>
                  <p className="c-time mt-3">請於時間內付款：02 小時 34 分鐘 56 秒</p>
                </div>
                <div className="d-flex flex-row">
                  <div className="d-flex">
                    <FaRegEdit size={20} />
                    <p className="c-bline ml-1 mr-4">
                      商品細節
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="c-price d-flex flex-column align-items-center col-2">
              <p className="mb-5">價格</p>
              <p>NT$ 870</p>
            </div>
            <div className="c-quantity d-flex flex-column align-items-center col-2">
              <p className="mb-5">數量</p>
              <div>1</div>
            </div>
            <div className="c-total d-flex flex-column align-items-center col-2">
              <p className="mb-5">小計</p>
              <p>NT$ 870</p>
            </div>
          </div>

          {/* 總金額＆折價卷 */}
          <div className="d-flex justify-content-between mt-3 pt-3 pb-5">
            <div className="c-left">
              <p className="c-bline mr-5">聯絡客服</p>
              <p className="c-bline mt-3">運費＆退貨條款</p>
            </div>
            <div className="d-flex flex-column">
              <p className="ml-3">
                總計：<sapn className="h4">NT$ 870</sapn>
              </p>
              <p className="c-bline mt-3 ml-5">
                運費＆退貨條款
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
            <div className="c-checkoutbtn">
              <p>結帳</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartProduct

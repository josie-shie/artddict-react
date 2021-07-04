import React from 'react'
import { ReactComponent as Logo } from '../../pics/logo-bk.svg'

import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import '../../bootstrap/css/bootstrap.css'
import './styles/cart-event.scss'

//img
import img3 from './img/3.png'

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
        <div className="c-productlist mt-5">
          <div className="c-product-r1 d-flex pb-5">
            <img className="col-2" src={img3} />
            <div className="c-product1 d-flex col-4">
              <div className="c-product1detail d-flex flex-column justify-content-between">
                <div>
                  <p className="h4">
                    巷弄之間 【尋找隱藏達人計畫】
                  </p>
                  <p className="c-pid">活動編號 # 200123</p>
                  <p className="mt-2">
                    票卷日期：2021-04-24
                  </p>
                  <p className="mt-1">票卷種類：成人票</p>
                </div>
                <div className="d-flex flex-row">
                  <div className="d-flex">
                    <FaRegEdit size={20} />
                    <p className="c-bline ml-1 mr-4">
                      活動細節
                    </p>
                  </div>
                  <div className="d-flex">
                    <RiDeleteBinLine size={20} />
                    <p className="c-bline ml-1">移除票卷</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="c-price d-flex flex-column align-items-center col-2">
              <p className="mb-5">價格</p>
              <p>NT$ 550</p>
            </div>
            <div className="c-quantity d-flex flex-column align-items-center col-2">
              <p className="mb-3 pb-3">數量</p>
              <div className="c-qbox">2</div>
            </div>
            <div className="c-total d-flex flex-column align-items-center col-2">
              <p className="mb-5">小計</p>
              <p>NT$ 1,100</p>
            </div>
          </div>

          {/* 總金額＆折價卷 */}
          <div className="d-flex justify-content-between mt-3 pt-3 pb-5">
            <div className="c-left">
              <p className="c-bline mr-5">聯絡客服</p>
              <p className="c-bline mt-3">運費＆退貨條款</p>
            </div>
            <div>
              <p>
                總計：<sapn className="h4">NT$ 1,100</sapn>
              </p>
              <p className="c-bline ml-5 mt-3">
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

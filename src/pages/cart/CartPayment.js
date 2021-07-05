import { React, useState } from 'react'
import { ReactComponent as Logo } from '../../pics/logo-bk.svg'

import '../../bootstrap/css/bootstrap.css'
import './styles/cart-payment.scss'

// imgae
import img1 from './img/1.png'
import img2 from './img/2.png'

// icon
import { FaLock } from 'react-icons/fa'
import { RiArrowRightSLine } from 'react-icons/ri'

function CartProduct() {
  return (
    <>
      <div className="c-bg">
        <div className="c-header">
          <Logo className="c-logo" />
          <p>Hello JoJo</p>
        </div>
        <div className="c-crumbs1">
          <a href="./">
            <p>首頁&nbsp;/&nbsp;</p>
          </a>
          <a href="./cart-product">
            <p>購物車&nbsp;/&nbsp;</p>
          </a>
          <p>結帳</p>
        </div>
        <div className="c-step d-flex align-items-center justify-content-center">
          <div className="c-shipment2">收件資訊</div>
          <RiArrowRightSLine
            size={30}
            className="c-grayarrow1"
          />
          <div className="c-payment2">付款資訊</div>
          <RiArrowRightSLine
            size={30}
            className="c-grayarrow"
          />
          <div className="c-complete2">完成訂單</div>
        </div>
        <div className="d-flex">
          <div className="c-shippinginfo1 col-6 px-0 mr-auto">
            <form action="./cart-finish">
              <div className="c-shipleft d-flex">
                <p className="mr-auto">付款資訊</p>
                <p className="c-f12">*必填項目</p>
              </div>
              <div className="c-ship2 py-4">
                <div className="c-paymethod">
                  <p>信用卡*</p>
                  <select className="">
                    <option>VISA</option>
                    <option>MASTER</option>
                  </select>
                  <p className="pt-3">信用卡號碼*</p>
                  <input />
                  <div className="d-flex">
                    <div className="col-3 pl-0">
                      <p className="pt-3">有效期限*</p>
                      <select className="w-100">
                        <option value="" disabled selected>
                          MM
                        </option>
                        <option>01</option>
                      </select>
                    </div>
                    <div className="col-3 pl-1">
                      <p className="pt-3"> </p>
                      <select className="w-100">
                        <option value="" disabled selected>
                          YYYY
                        </option>
                        <option>2021</option>
                      </select>
                    </div>
                    <div className="col-3 pr-0 ml-auto">
                      <p className="pt-3">安全碼*</p>
                      <input />
                    </div>
                    <a
                      href="#"
                      className="ml-2 mt-auto c-store px-0 pb-0"
                    >
                      這是什麼?
                    </a>
                  </div>
                </div>
              </div>

              {/* 通訊選項 */}
              <p className="c-shipleft mt-4">通訊選項</p>
              <div className="c-shipmethod pt-4">
                <label className="d-flex align-items-baseline pb-2">
                  <input type="checkbox" className="mr-2" />
                  <p>
                    儲存我的收件資訊，以便未來的訂購使用
                  </p>
                </label>
                <label className="d-flex align-items-baseline">
                  <input type="checkbox" className="mr-2" />
                  <p>我願意收到活動及商品的相關優惠資訊</p>
                </label>
              </div>
              <p className="c-f12 mt-3">
                點選「確認付款」表示您接受我們的
                <a href="#" className="c-store pb-0">
                  付費＆退貨條款
                </a>
              </p>

              <div className="my-4">
                <input
                  type="submit"
                  value="確認付款"
                  className="c-checkoutbtn2"
                />
              </div>

              <div className="c-checkout1 pt-3 pb-5 d-flex align-items-center">
                <FaLock size={20} />
                <p className="c-lock ml-1">
                  本賣場使用綠界科技安全結帳系統，保障您的資安
                </p>
              </div>
            </form>
          </div>
          <div className="col-5 px-0">
            <div className="c-item1 d-flex mb-4">
              <img className="mr-4" src={img1} />
              <div className="mr-auto">
                <p>梵谷自畫像T-Shirt</p>
                <p className="c-pid pt-2">
                  商品編號 # 200123
                </p>
                <p className="c-f12 pt-2">尺寸：S</p>
                <p className="c-f12 pt-1">數量：1</p>
              </div>
              <p>NT$ 780</p>
            </div>
            <div className="c-item1 d-flex mb-4">
              <img className="mr-4" src={img2} />
              <div className="mr-auto">
                <p>梵谷自畫像T-Shirt</p>
                <p className="c-pid pt-2">
                  商品編號 # 200123
                </p>
                <p className="c-f12 pt-2">尺寸：S</p>
                <p className="c-f12 pt-1">數量：1</p>
              </div>
              <p>NT$ 780</p>
            </div>
            <div className="c-bb d-flex pb-4 px-3 mb-4">
              <p className="mr-auto">商品小計</p>
              <p>NT$ 1,560</p>
            </div>
            <div className="c-bb d-flex pb-4 px-3 mb-4">
              <p className="mr-auto">運費小計</p>
              <p>NT$ 80</p>
            </div>
            <div className="c-bb d-flex align-items-baseline pb-4 px-3 mb-4">
              <p className="mr-3">折扣碼 - 五月優惠</p>
              <a href="#" className="mr-auto c-store pb-0">
                移除
              </a>
              <p>- NT$ 50</p>
            </div>
            <div className="c-bb1 d-flex pb-3 px-3 mb-4">
              <p className="h5 mr-auto">總計</p>
              <p className="h5">NT$ 1,590</p>
            </div>
            <div className="mt-5">
              <div className="c-shipleft">
                <div className="px-3  d-flex">
                  <p className="mr-auto">付款資訊</p>
                  <p>
                    <a href="#" className="c-store pb-0">
                      回上一頁修改
                    </a>
                  </p>
                </div>
              </div>
              <div class="c-shipdetail px-3 pb-5">
                <p>收件人：謝喬心</p>
                <p>收件地址：台北市大安區大馬路123號5樓</p>
                <p>聯絡電話：0911-222333</p>
                <p>寄送方式：宅配到府 - 運費：NT$ 80</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartProduct

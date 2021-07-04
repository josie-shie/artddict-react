import { React, useState } from 'react'
import { ReactComponent as Logo } from '../../pics/logo-bk.svg'

import '../../bootstrap/css/bootstrap.css'
import './styles/cart-finish.scss'

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
          <div className="c-shipment3">收件資訊</div>
          <RiArrowRightSLine
            size={30}
            className="c-grayarrow1"
          />
          <div className="c-payment3">付款資訊</div>
          <RiArrowRightSLine
            size={30}
            className="c-grayarrow1"
          />
          <div className="c-complete3">完成訂單</div>
        </div>
        <div className="c-thank">
          <p className="h5">感謝您的訂購！</p>
          <p className="pt-2">
            您的訂單資訊如下，並已同步寄到您填寫的e-mail信箱
          </p>
        </div>
        <table className="c-order">
          <thead>
            <th>訂單明細</th>
          </thead>
          <tbody>
            <tr>
              <td>訂單編號：001234</td>
            </tr>
            <tr>
              <td className="c-td-dark">
                訂單日期：2021-06-04
              </td>
            </tr>
            <tr>
              <td>商品小計：NT$ 1,560</td>
            </tr>
            <tr>
              <td className="c-td-dark">
                運費小計：NT$ 80
              </td>
            </tr>
            <tr>
              <td>折扣碼：- NT$ 50</td>
            </tr>
            <tr>
              <td className="c-td-dark">總價：NT$ 1,590</td>
            </tr>
            <tr>
              <td>
                <div class="c-td-p1 d-flex align-items-center">
                  <img src={img1} />
                  <div className="col ml-4">
                    <p className="pb-2">
                      梵谷自畫像T-Shirt
                    </p>
                    <p className="c-fgray">
                      商品編號 # 200123
                    </p>
                  </div>
                  <p className="col">尺寸：S</p>
                  <p className="col">數量：1</p>
                  <p className="col">NT$ 780</p>
                </div>
                <div class="c-td-p1 d-flex align-items-center mt-2">
                  <img src={img2} />
                  <div className="col ml-4">
                    <p className="pb-2">
                      梵谷自畫像T-Shirt
                    </p>
                    <p className="c-fgray">
                      商品編號 # 200123
                    </p>
                  </div>
                  <p className="col">尺寸：S</p>
                  <p className="col">數量：1</p>
                  <p className="col">NT$ 780</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="c-order mt-5">
          <thead>
            <th>付款資訊</th>
          </thead>
          <tbody>
            <tr>
              <td>信用卡別：VISA</td>
            </tr>
            <tr>
              <td className="c-td-dark">
                信用卡號：XXXX-XXXX-XXXX-2348
              </td>
            </tr>
            <tr>
              <td>有效期限：XX-2025</td>
            </tr>
            <tr>
              <td className="c-td-dark">
                刷卡金額：NT$ 1,590
              </td>
            </tr>
          </tbody>
        </table>
        <table className="c-order mt-5">
          <thead>
            <th>收件資訊</th>
          </thead>
          <tbody>
            <tr>
              <td>收件人：謝喬心</td>
            </tr>
            <tr>
              <td className="c-td-dark">
                收件地址：台北市大安區大馬路123號5樓
              </td>
            </tr>
            <tr>
              <td>聯絡電話：0911-222333</td>
            </tr>
            <tr>
              <td className="c-td-dark">
                寄送方式：宅配到府 - 運費：NT$ 80
              </td>
            </tr>
          </tbody>
        </table>
        <div className="c-finish-bottom">
          <a href="#" className="">
            <div className="c-finbtn1">
              <p>查詢訂單</p>
            </div>
          </a>
          <a href="#" className="ml-5">
            <div className="c-finbtn">
              <p>回到賣場</p>
            </div>
          </a>
        </div>
        <div className="c-checkout1 pt-3 pb-5 d-flex align-items-center">
          <FaLock size={20} />
          <p className="c-lock ml-3">
            更多資訊請參考
            <a href="#" className="c-store pb-0">
              隱私權條款
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default CartProduct

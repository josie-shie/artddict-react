import { React, useState } from 'react'
import { ReactComponent as Logo } from '../../pics/logo-bk.svg'
import { countries, townships } from './data/townships'

import '../../bootstrap/css/bootstrap.css'
import './styles/cart-shipping.scss'

// imgae
import img1 from './img/1.png'
import img2 from './img/2.png'

// icon
import { FaLock } from 'react-icons/fa'
import { RiArrowRightSLine } from 'react-icons/ri'

function CartProduct() {
  const [status, setStatus] = useState(0)
  const radioHandler = (status) => {
    setStatus(status)
  }
  const [country, setCountry] = useState(-1)
  const [township, setTownship] = useState(-1)
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
          <div className="c-shipment">收件資訊</div>
          <RiArrowRightSLine
            size={30}
            className="c-grayarrow"
          />
          <div className="c-payment">付款資訊</div>
          <RiArrowRightSLine
            size={30}
            className="c-grayarrow"
          />
          <div className="c-complete">完成訂單</div>
        </div>
        <div className="d-flex">
          <div className="c-shippinginfo1 col-6 px-0 mr-auto">
            <form action="">
              <div className="c-shipleft d-flex">
                <p className="mr-auto">收件資訊</p>
                <p className="c-">*必填項目</p>
              </div>
              <div className="c-ship1 py-4">
                <label className="c-label-r1 d-flex align-items-baseline pb-3">
                  <input
                    type="radio"
                    name="address"
                    checked={status === 2}
                    onClick={(e) => radioHandler(2)}
                  />
                  <span className="c-label"></span>
                  <p>謝喬心 - 台北市大安區大馬路123號5樓</p>
                </label>

                <label className="c-label-r1 d-flex align-items-baseline">
                  <input
                    type="radio"
                    name="address"
                    checked={status === 1}
                    onClick={(e) => radioHandler(1)}
                  />
                  <span className="c-label"></span>
                  <p>輸入其他收件資訊</p>
                </label>
              </div>

              {/* 新增收件資訊 */}
              {status === 1 && (
                <div className="c-new py-4">
                  <p>收件人姓名*</p>
                  <input type="text" />
                  <div className="d-flex">
                    <div className="col-6 pl-0">
                      <p className="pt-3">縣市*</p>
                      <select
                        className="w-100"
                        value={country}
                        onChange={(e) => {
                          // 將字串轉成數字
                          setCountry(+e.target.value)
                          // 重置township的值
                          setTownship(-1)
                        }}
                      >
                        <option value="-1">選擇縣市</option>
                        {countries.map((value, index) => (
                          <option key={index} value={index}>
                            {value}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-6 pr-0">
                      <p className="pt-3">地區*</p>
                      <select
                        className="w-100"
                        value={township}
                        onChange={(e) => {
                          // 將字串轉成數字
                          setTownship(+e.target.value)
                        }}
                      >
                        <option value="-1">選擇區域</option>
                        {country > -1 &&
                          townships[country].map(
                            (value, index) => (
                              <option
                                key={index}
                                value={index}
                              >
                                {value}
                              </option>
                            )
                          )}
                      </select>
                    </div>
                  </div>
                  <p className="pt-3">收件地址*</p>
                  <input type="text" />
                  <p className="pt-3">聯絡電話*</p>
                  <input type="text" />
                </div>
              )}

              <div className="c-shipmethod pt-4">
                <p className="pb-4">運送方式</p>
                <label className="c-label-r1 d-flex align-items-baseline pb-3">
                  <input type="radio" name="ship" checked />
                  <span className="c-label"></span>
                  <p>宅配到府 - 運費：NT$ 80</p>
                </label>

                <label className="c-label-r1 d-flex align-items-baseline">
                  <input type="radio" name="ship" />
                  <span className="c-label"></span>
                  <p>超商取貨 - 運費：NT$ 50</p>
                  <a href="#" className="c-store ml-3 pb-0">
                    選擇門市
                  </a>
                </label>
              </div>
              <a href="./cart-payment">
                <div className="c-checkoutbtn my-4">
                  <p>繼續結帳</p>
                </div>
              </a>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default CartProduct

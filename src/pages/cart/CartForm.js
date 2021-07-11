import { React, useState } from 'react'
import { useForm } from 'react-hook-form'

import { ReactComponent as Logo } from '../../pics/logo-bk.svg'

// components
import CartFormShip from './components/CartFormShip'
import CartFormPay from './components/CartFormPay'
import CartFormFinish from './components/CartFormFinish'

// styles
import '../../bootstrap/css/bootstrap.css'
import './styles/cart-shipping.scss'
import './styles/cart-payment.scss'

// imgae
import img1 from './img/1.png'
import img2 from './img/2.png'

// icon
import { FaLock } from 'react-icons/fa'
import { RiArrowRightSLine } from 'react-icons/ri'

function Cart() {
  // formstep
  const [formStep, setFormStep] = useState(0)
  const completeFormStep = () => {
    setFormStep((cur) => cur + 1)
  }
  // formbutton
  const renderButton = () => {
    if (formStep > 1) {
      return undefined
    } else if (formStep === 1) {
      return (
        <div className="my-4">
          <button
            type="button"
            onClick={completeFormStep}
            className="c-checkoutbtn2"
          >
            確認付款
          </button>
        </div>
      )
    } else {
      return (
        <div className="my-4">
          <button
            onClick={completeFormStep}
            type="button"
            className="c-checkoutbtn2"
          >
            繼續結帳
          </button>
        </div>
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
        <div className="c-crumbs1">
          <a href="./">
            <p>首頁&nbsp;/&nbsp;</p>
          </a>
          <a href="./cart-product">
            <p>購物車&nbsp;/&nbsp;</p>
          </a>
          <p>結帳</p>
        </div>
        {formStep === 0 && (
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
        )}
        {formStep === 1 && (
          <div className="c-step d-flex align-items-center justify-content-center">
            <div className="c-shipment2">收件資訊</div>
            <RiArrowRightSLine size={30} />
            <div className="c-payment2">付款資訊</div>
            <RiArrowRightSLine
              size={30}
              className="c-grayarrow"
            />
            <div className="c-complete">完成訂單</div>
          </div>
        )}
        {formStep === 2 && (
          <div className="c-step d-flex align-items-center justify-content-center">
            <div className="c-shipment2">收件資訊</div>
            <RiArrowRightSLine size={30} />
            <div className="c-payment3">付款資訊</div>
            <RiArrowRightSLine size={30} />
            <div className="c-complete3">完成訂單</div>
          </div>
        )}

        <div className="d-flex">
          {formStep < 2 && (
            <div className="col-6 mr-auto px-0">
              <form>
                <div>
                  {/* shipping */}
                  {formStep === 0 && <CartFormShip />}
                  {/* payment */}
                  {formStep === 1 && <CartFormPay />}
                  {formStep < 2 && (
                    <div>
                      <p className="c-f12 mt-3">
                        點選「確認付款」表示您接受我們的
                        <a
                          href="##"
                          className="c-store pb-0"
                        >
                          付費＆退貨條款
                        </a>
                      </p>
                      {renderButton()}
                      <div className="c-checkout1 pt-3 pb-5 d-flex align-items-center">
                        <FaLock size={20} />
                        <p className="c-lock ml-1">
                          本賣場使用綠界科技安全結帳系統，保障您的資安
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>
          )}

          {formStep < 2 && (
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
                <a
                  href="##"
                  className="mr-auto c-store pb-0"
                >
                  移除
                </a>
                <p>- NT$ 50</p>
              </div>
              <div className="c-bb1 d-flex pb-3 px-3 mb-4">
                <p className="h5 mr-auto">總計</p>
                <p className="h5">NT$ 1,590</p>
              </div>
              {formStep === 1 && (
                <section>
                  <div className="mt-5">
                    <div className="c-shipleft">
                      <div className="px-3  d-flex">
                        <p className="mr-auto">付款資訊</p>
                        <p>
                          <a
                            href="##"
                            className="c-store pb-0"
                          >
                            回上一頁修改
                          </a>
                        </p>
                      </div>
                    </div>
                    <div class="c-shipdetail px-3 pb-5">
                      <p>收件人：謝喬心</p>
                      <p>
                        收件地址：台北市大安區大馬路123號5樓
                      </p>
                      <p>聯絡電話：0911-222333</p>
                      <p>
                        寄送方式：宅配到府 - 運費：NT$ 80
                      </p>
                    </div>
                  </div>
                </section>
              )}
            </div>
          )}
          {formStep === 2 && <CartFormFinish />}
        </div>
      </div>
    </>
  )
}

export default Cart

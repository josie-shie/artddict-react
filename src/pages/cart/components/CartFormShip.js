import { React, useState } from 'react'
import { useForm } from 'react-hook-form'
import { countries, townships } from '../data/townships'

function CartFormShip() {
  const { watch, register } = useForm()
  const [status, setStatus] = useState(0)
  const radioHandler = (status) => {
    setStatus(status)
  }
  const [country, setCountry] = useState(-1)
  const [township, setTownship] = useState(-1)
  return (
    <>
      <section className="c-shippinginfo1 px-0">
        <div className="c-shipleft d-flex">
          <p className="mr-auto">收件資訊*</p>
          <p className="c-f12">*必填項目</p>
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
            <input
              type="text"
              id="username"
              name="username"
              required
            />
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
                        <option key={index} value={index}>
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
            <a href="##" className="c-store ml-3 pb-0">
              選擇門市
            </a>
          </label>
        </div>
        {/* <a href="./cart-payment">
                      <div className="c-checkoutbtn my-4">
                        <p>繼續結帳</p>
                      </div>
                    </a>
                    <div className="c-checkout1 pt-3 pb-5 d-flex align-items-center">
                      <FaLock size={20} />
                      <p className="c-lock ml-1">
                        本賣場使用綠界科技安全結帳系統，保障您的資安
                      </p>
                    </div> */}
      </section>
    </>
  )
}
export default CartFormShip

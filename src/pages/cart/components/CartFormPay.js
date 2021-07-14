import { React, useState } from 'react'
import { useForm } from 'react-hook-form'

// @material-ui
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

function CartFormPay() {
  // react hook form
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  // checkbox
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  })
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    })
  }
  return (
    <>
      <section className="c-shippinginfo1 px-0">
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
            <input
              type="text"
              id="credit"
              {...register('credit', { required: true })}
            />
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
                href="##"
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
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                style={{ color: 'black' }}
              />
            }
            label={
              <span
                style={{
                  fontFamily: 'Noto Sans TC Medium',
                }}
              >
                儲存我的收件資訊，以便未來的訂購使用
              </span>
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                style={{ color: 'black' }}
              />
            }
            label={
              <span
                style={{
                  fontFamily: 'Noto Sans TC Medium',
                }}
              >
                我願意收到活動及商品的相關優惠資訊
              </span>
            }
          />
        </div>
      </section>
    </>
  )
}

export default CartFormPay

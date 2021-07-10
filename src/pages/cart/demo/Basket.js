import React, { useState, useEffect } from 'react'

// icon
import { FaRegEdit } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'
import { RiDeleteBinLine } from 'react-icons/ri'

export default function Basket(props) {
  const { onCartNumChange, onDelete, cartItems } = props
  const itemsPrice = cartItems.reduce(
    (a, c) => a + c.qty * c.price,
    0
  )
  const totalPrice = itemsPrice
  return (
    <div>
      {cartItems.length === 0 && (
        <div className="c-empty">您的購物車是空的</div>
      )}
      {cartItems.map((item) => (
        <>
          <div className="c-product-r1 d-block d-flex py-5 pl-4">
            <div className="c-img150">
              <img src={item.image} alt="" />
            </div>
            <div className="c-product1detail d-flex flex-column justify-content-between col-4 pl-4">
              <div>
                <p className="h4">{item.name}</p>
                <p className="c-pid">
                  商品編號 # {item.sid}
                </p>
                <p className="mt-3">尺寸：{item.size}</p>
              </div>
              <div className="d-lg-flex">
                <a
                  href="##"
                  className="c-product-a d-flex align-items-center"
                >
                  <FaRegEdit size={20} />
                  <p className="c-store2 ml-1 mr-4">
                    商品細節
                  </p>
                </a>
                <a
                  href="##"
                  className="c-product-a d-flex align-items-center"
                >
                  <RiDeleteBinLine size={20} />
                  <p
                    onClick={() => onDelete(item)}
                    className="c-store2 ml-1 mr-4"
                  >
                    移除商品
                  </p>
                </a>
              </div>
            </div>
            <div className="c-price d-flex flex-column align-items-center col-2">
              <p className="mb-5">價格</p>
              <p>NT$ {item.price}</p>
            </div>
            <div className="c-quantity d-flex flex-column align-items-center col-2">
              <p className="mb-3 pb-3">數量</p>
              <div className="c-qbox">
                <input
                  type="number"
                  value={item.qty}
                  onChange={(evt) => {
                    onCartNumChange(item, evt.target.value)
                  }}
                />
              </div>
            </div>
            <div className="c-total d-flex flex-column align-items-center col-2">
              <p className="mb-5">小計</p>
              <p>NT$ {item.qty * item.price}</p>
            </div>
          </div>
        </>
      ))}

      <div className="d-flex justify-content-between mt-3 pt-3 pb-5">
        <div className>
          <a href="##" className="c-store2 mr-5">
            聯絡客服
          </a>
          <a href="##" className="c-store2 d-block mt-2">
            運費＆退貨條款
          </a>
        </div>
        <div>
          <p>
            總計：
            <sapn className="h4">NT$ {totalPrice}</sapn>
          </p>
          <a
            href="##"
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
        <a href="./cart-form">
          <div className="c-checkoutbtn">
            <p>結帳</p>
          </div>
        </a>
      </div>
    </div>
  )
}

import React from 'react'

export default function Basket2(props) {
  const { cartItems } = props
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
          <div>
            <div className="c-item1 d-flex mb-4">
              <img className="mr-4" src={item.image} />
              <div className="mr-auto">
                <p>{item.name}</p>
                <p className="c-pid pt-2">
                  商品編號 # {item.sid}
                </p>
                <p className="c-f12 pt-2">
                  尺寸：{item.size}
                </p>
                <p className="c-f12 pt-1">
                  數量：{item.qty}
                </p>
              </div>
              <p>NT$ {item.qty * item.price}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  )
}

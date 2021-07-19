import React from 'react'

export default function Basket2Product(props) {
  const { displaycartitems } = props

  return (
    <div>
      {displaycartitems.length === 0 && (
        <div className="c-empty">您的購物車是空的</div>
      )}
      {displaycartitems.map((item) => (
        <>
          <div>
            <div className="c-item1 d-flex mb-4">
              <img
                className="mr-4"
                src={`http://localhost:6005/Aucpics/auc/${item.eventImg}`}
                alt=""
              />
              <div className="mr-auto">
                <p>{item.eventName}</p>
                <p className="c-pid pt-2">
                  拍賣編號 # {item.eventId}
                </p>
                <p
                  className={
                    item.eventType === ''
                      ? 'd-none'
                      : 'c-f12 pt-2'
                  }
                >
                  尺寸：{item.eventType}
                </p>
                <p className="c-f12 pt-1">
                  數量：{item.qty}
                </p>
              </div>
              <p>NT$ {item.qty * item.eventPrice}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  )
}

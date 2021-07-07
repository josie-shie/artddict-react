import React from 'react'

export default function FakeProduct(props) {
  const { product, onAdd } = props
  return (
    <div className="c-fakeplist mt-3 mr-4">
      {/* <img
        className="small"
        src={product.image}
        alt={product.name}
      /> */}
      <h3>{product.name}</h3>
      <div className="c-f12">商品編號 # {product.sid}</div>
      <div>NT${product.price}</div>
      <div>尺寸：{product.size}</div>
      <div>${product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>
          <p>Add To Cart</p>
        </button>
      </div>
    </div>
  )
}

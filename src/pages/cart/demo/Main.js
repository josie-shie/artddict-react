import React from 'react'
import FakeProduct from './FakeProduct'

export default function Main(props) {
  const { products, onAddToCart } = props
  return (
    <main>
      <div className="d-flex">
        {products.map((product) => (
          <FakeProduct
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          ></FakeProduct>
        ))}
      </div>
    </main>
  )
}

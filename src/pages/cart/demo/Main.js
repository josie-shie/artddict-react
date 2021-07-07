import React from 'react'
import FakeProduct from './FakeProduct'

export default function Main(props) {
  const { products, onAdd } = props
  return (
    <main>
      <div className="d-flex">
        {products.map((product) => (
          <FakeProduct
            key={product.id}
            product={product}
            onAdd={onAdd}
          ></FakeProduct>
        ))}
      </div>
    </main>
  )
}

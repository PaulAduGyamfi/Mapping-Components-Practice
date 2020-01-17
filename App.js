import React from "react"
import Product from './Product'
import productsData from "./vschoolProducts"

function App() {
   const list = productsData.map((product) =>
        <Product 
            key= {product.id}
            name= {product.name}
            price= {product.price}
            description= {product.description}
        />
)
  return (
    <div>
          {list} 
    </div>
  )
}

export default App

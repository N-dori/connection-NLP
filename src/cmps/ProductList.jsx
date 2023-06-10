import React from 'react'
import { ProductPreview } from './ProductPreview'

export  function ProductList({shoppingCart}) {
  return (
    <section  className='course-preview grid'>
   {
    shoppingCart.map(product => 
   <ProductPreview key={product._id} product={product}/>      
   )} 

    </section>

    
  )
}

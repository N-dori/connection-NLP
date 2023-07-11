import React, { useEffect } from 'react'
import { ProductPreview } from './ProductPreview'
export function ProductList({loggdingUser, onRemove,shoppingCart }) {

  useEffect(() => {
    if(shoppingCart){
    }
  }, [JSON.stringify(shoppingCart)])
  

  return (
      shoppingCart?
    <section className='product-preview grid'>
      {
        shoppingCart.map((product,i) =>
          <ProductPreview key={i} onRemove={onRemove} product={product} loggdingUser={loggdingUser} />
      
      )}

    </section>:''


  )
}

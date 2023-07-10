import React, { useEffect } from 'react'
import { ProductPreview } from './ProductPreview'
export function ProductList({ onRemove,shoppingCart }) {

  useEffect(() => {
    if(shoppingCart){
      console.log('shoppingCart',shoppingCart)
    }
  }, [JSON.stringify(shoppingCart)])
  

  return (
      shoppingCart?
    <section className='product-preview grid'>
      {
        shoppingCart.map((product,i) =>
          <ProductPreview key={i} onRemove={onRemove} product={product} />
      
      )}

    </section>:''


  )
}

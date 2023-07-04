import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
export  function ProductCheckout({handelChekOut,sum,loggdingUser}) {

    useEffect(() => {
    }, [sum])

    
  return (
    <section className='product-Checkout-container'>
  
           <div className='product-Checkout-warpper'>
        <h3 className='headline'>סך הכל:</h3>
        <p className='product-price'>{sum}</p>
        <button className='checkout-btn flex-jc-ac' onClick={handelChekOut}>לתשלום מאובטח</button>
           </div>
         
    </section>
  )
}

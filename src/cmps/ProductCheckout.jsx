import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
export  function ProductCheckout({handelChekOut,sum,beforeDiscount}) {
    useEffect(() => {
      console.log('sunn', sum)
   
    }, [sum,beforeDiscount])

  
  return (
    <section className='product-Checkout-container'>
  
           <div className='product-Checkout-warpper'>
        <h3 className='headline'>סך הכל:</h3>
        {beforeDiscount?
        beforeDiscount === 5000?
       <div>
        <p className='before-discount-price'>{beforeDiscount} </p>
        <span className='discount-txt'>מבצע NLP Practitioner + NLP Master</span>
       </div> :''
        
        :''
        }
        {beforeDiscount?
        beforeDiscount === 9200?
       <div>
        <p className='before-discount-price'>{beforeDiscount} </p>
        <span className='discount-txt'>מבצע NLP Practitioner + NLP Master + Advence</span>
       </div> :''
        
        :''
        }
        <p className='product-price'>{sum}</p>
        <button className='checkout-btn flex-jc-ac' onClick={handelChekOut}>לתשלום מאובטח</button>
           </div>
         
    </section>
  )
}

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export  function ProductCheckout({sum,loggdingUser}) {
    const navigate = useNavigate()
    useEffect(() => {
    }, [sum])
    
  return (
    <section className='product-Checkout-container'>
  
           <div className='product-Checkout-warpper'>
        <h3 className='headline'>Total:</h3>
        <p className='product-price'>${sum}</p>
        <button className='checkout-btn flex-jc-ac' onClick={()=>{navigate(`/payment/${loggdingUser._id}`)}}>Checkout</button>
           </div>

    </section>
  )
}

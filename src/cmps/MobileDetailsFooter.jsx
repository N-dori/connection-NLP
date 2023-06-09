import React from 'react'

export default function MobileDetailsFooter({addToCart , priceBeforeDiscount,formatedPrice,title,subTitle,}) {
    const handelActionBtn = () => {
      window.scrollTo(0,0)
        addToCart()
      }
    return (
  <section className='mobile-details-footer-container'>
    <main className='mobile-details-footer-wrapper flex-sb'>
        <div className='course-title-container '>
        <p className='course-title'>{title}</p>
          <p className='course-title'>{subTitle}</p>
        </div>
        <section className='prices-and-action-btn flex'>
        <div className='prices flex-col'>
        <span className='course-price-before-discount'>{priceBeforeDiscount}</span>
        <span className='course-price'>{formatedPrice}</span>
        </div>

        <button className='action-btn flex-ac-jc' onClick={handelActionBtn} > <span className='txt'>לרכישה</span></button>

        </section>
    </main>
  </section>
  )
}

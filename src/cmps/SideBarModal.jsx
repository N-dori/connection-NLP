import React, { useEffect, useState } from 'react'
import { imgService } from '../services/imgService'
import { PlaySvg } from '../svgs/PlaySvg'

export function SideBarModal({userMsg,price,addToCart,setIsPlayerVisible}) {
  useEffect(()=>{
    getFormatedPrice()
  },[userMsg])
  
    const onOpenPlayer = () => {
      document.body.style='overflow-y: hidden;'
      setIsPlayerVisible(true)
    }
  const handelActionBtn = () => {
    addToCart()
  }
  const getFormatedPrice =(type) => {
    let formatedPrice = new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' })
    if(type ==='before-dicount'){
      let priceBeforeDiscount = (+price+(+price*0.1)).toFixed(0)
      return formatedPrice.format(priceBeforeDiscount)
    }else {
      return formatedPrice.format(price)
    }
  
  
  }


  return (


    <section className='sticky-modal-container'>

      <section className="modal-warpper">
      <div  className='preview-img-wrapper flex-jc-ac 'onClick={onOpenPlayer}>
   <img className='preview-course-img' src="https://res.cloudinary.com/dii16awkb/image/upload/v1687866273/imgCoverAdvanceCourse_s6sxkv.png" alt="" />
   <PlaySvg />

  </div>
   <div className='black flex-jc-ac'>
            <p>לצפייה בתצוגה מקדימה</p>
            </div>
            <section className='actions-section'>
        <p>קבל 10% הנחה ברכישה של קורס משנה חיים  </p>
        <div className='before-discount-price'>{getFormatedPrice('before-dicount')}</div>
        <div className='price'>{getFormatedPrice()}</div>
          <div className='action-btn-container flex-jc'>
        <button className='action-btn flex-jc-ac' onClick={handelActionBtn} ><span>לרכישת הקורס</span></button>

          </div>
          {userMsg?<span className='user-msg'>יש צורך בהרשמה לאתר תודה</span> :''}
        <p className='full-life-time'>גישה חופשית ללא הגבלת זמן</p>

        </section>

      </section>
    </section>


  )
}

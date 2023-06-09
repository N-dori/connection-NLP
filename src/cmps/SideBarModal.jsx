import React, { useEffect, useState } from 'react'
import { imgService } from '../services/imgService'
import { PlaySvg } from '../svgs/PlaySvg'

export function SideBarModal({courseCoverImg,formatedPrice,priceBeforeDiscount,userMsg,addToCart,setIsPlayerVisible}) {
  useEffect(()=>{
  },[userMsg])
  
    const onOpenPlayer = () => {
      document.body.style='overflow-y: hidden;'
      setIsPlayerVisible(true)
    }
  const handelActionBtn = () => {
    addToCart()
  }


  return (


    <section className='sticky-modal-container'>

      <section className="modal-warpper">
      <div  className='preview-img-wrapper flex-jc-ac 'onClick={onOpenPlayer}>
   <img className='preview-course-img' src={courseCoverImg} alt="" />
   <PlaySvg />

  </div>
   <div className='black flex-jc-ac'>
            <p>לצפייה בתצוגה מקדימה</p>
            </div>
            <section className='actions-section'>
        <p>קבל 10% הנחה ברכישה של קורס משנה חיים  </p>
        <p className='before-discount-price'>{priceBeforeDiscount}</p>
        <div className='price'>{formatedPrice}</div>
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

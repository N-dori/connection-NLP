import React, { useEffect, useState } from 'react'
import { imgService } from '../services/imgService'
import { PlaySvg } from '../svgs/PlaySvg'

export function DetailsModal({setIsPlayerVisible,goToShoppingCart}) {

  const onOpenPlayer = () => {
    document.body.style='overflow-y: hidden;'
    setIsPlayerVisible(true)
  }


  return (


    <section className='details-modal-container'>

      <section className="modal-warpper">
        <div className='preview-course-img-wrapper' onClick={onOpenPlayer}>
          <div className='green'></div>
          <div className='sand'>

          </div>
          <div className='black flex-jc'>
            <p>preview this course</p>
          </div>
          <div className='laptop-img-container'>
            <img className='laptop-img' src={imgService.getImg('laptop')} />
            <PlaySvg />
          </div>
        </div>
        <section className='actions-section'>
        <p className='headline'> Make sure to sign up first</p>
        <p>Get this life changing course, and get up to 10% discount </p>
        <div className='price'>$444.90</div>
          <div className='action-btn-container flex-jc'>
        <button className='action-btn flex-jc-ac' onClick={goToShoppingCart}><span>Buy this course</span></button>

          </div>
        <p className='full-life-time'>Full Lifetime Access</p>

        </section>

      </section>
    </section>


  )
}

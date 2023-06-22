import React, { useState } from 'react'
import { XSvg } from '../svgs/XSvg'
import { Rate } from './Rate'




export  function RatingModal({handelSubmitReview,handleChange,review,isShown,setIsSown,setRating}) {

   const onCloseModal = () => {
    console.log('is sown',isShown);
    setIsSown(!isShown)
   }
    return (
        <section className='rating-modal-container'>
        <div className='close-moadl-container' onClick={onCloseModal}>
      <XSvg />
        </div>
   
        <h2 className='headline'>rate this course</h2>
     
        <Rate setRating={setRating}  />
        <form onSubmit={handelSubmitReview} className='rating-compose-container flex-col'>
            <textarea className='text-editor'
             placeholder='we would love to get your feedback'
             onChange={handleChange} value={review.content} name='content' id='content'></textarea>
            <button className='send-rate-btn' type='submit'> Send and Continue </button>
        </form>
        </section>
    
  )
}

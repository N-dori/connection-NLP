import React, { useEffect, useState } from 'react'
import { XSvg } from '../svgs/XSvg'
import { Rate } from './Rate'




const   RatingModal = React.forwardRef ((props,ref)=> {
  useEffect(() => {
    scrollTo()
  }, [])
  
  const scrollTo = () =>{

    window.scrollTo({
    top: ref.current.offsetTop -200,
    behavior: "smooth"
  })}
   const onCloseModal = () => {
    console.log('is sown',props.isShown);
    props.setIsSown(!props.isShown)
   }
    return (
        <section ref={ref} className='rating-modal-container'>
        <div className='close-moadl-container' onClick={onCloseModal}>
      <XSvg />
        </div>
   
        <h2 className='headline'>דרג את הקורס</h2>
     
        <Rate setRating={props.setRating}  />
        <form onSubmit={props.handelSubmitReview} className='rating-compose-container flex-col'>
            <textarea className='text-editor'
             placeholder='נשמח לקבל את חוות דעתך תודה'
             onChange={props.handleChange} value={props.review.content} name='content' id='content'></textarea>
            <button className='send-rate-btn' type='submit'> שמור והמשך </button>
        </form>
        </section>
    
  )
})
export default RatingModal
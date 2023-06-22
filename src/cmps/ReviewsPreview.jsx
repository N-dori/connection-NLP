import React from 'react'

export  function ReviewsPreview({review}) {
  return (
    <article className='review-container flex-col'>
    <div className="reviewer-info flex-ac">
    <p className='reviewer-name'>{review.reviewedBy.fname}</p>
  <div className='reviewer-img-container'>
    <img src={review.reviewedBy.imgUrl} alt="user" className="reviewer-img" />
  </div>
</div>
<div className='review-txt'>
  <p>{review.content}</p>

</div> 
</article>
 )
}

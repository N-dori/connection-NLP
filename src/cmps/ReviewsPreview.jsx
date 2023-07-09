import React from 'react'
import { FlagSvg } from '../svgs/FlagSvg'


export  function ReviewsPreview({review}) {

  const getRelativeTime = () => {
    const DAY = 1000 * 60 * 60 * 24
    const HOUR = 1000 * 60 * 60
    const pastTime =(review.reviewedAt - Date.now() )/HOUR
    const rtf1 = new Intl.RelativeTimeFormat('he', { style: 'short' });
    // console.log('pastTime',pastTime.toFixed(0));
    return rtf1.format(pastTime.toFixed(0), 'hour')
}
  return (
    <article className='review-container flex-col'>
    <div className="reviewer-info flex-ac">
      <header className='name-and-when flex-col'>
    <p className='reviewer-name'>{review.reviewedBy.name}</p>
    <span className='reviwed-at flex'>
                תגובה פורסמה  · {getRelativeTime()} ·<FlagSvg/>
    </span>
      </header>
  <div className='reviewer-img-container'>
    <img src={review.reviewedBy.imgUrl} alt="user" className="reviewer-img" />
  </div>
</div>
<div className='review-txt'>
  <p className='content'>"{review.content}"</p>

</div> 
</article>
 )
}

import React from 'react'
import { FlagSvg } from '../svgs/FlagSvg'

export  function CommentPreview({comment}) {
  const getRelativeTime = () => {
    const DAY = 1000 * 60 * 60 * 24
    const HOUR = 1000 * 60 * 60
    const pastTime =(comment.commentAt- Date.now() )/HOUR
    const rtf1 = new Intl.RelativeTimeFormat('he', { style: 'short' });
    // console.log('pastTime',pastTime.toFixed(0));
    return rtf1.format(pastTime.toFixed(0), 'hour')
}
  return (
    <article className='comment-wrapper grid'>
        <section className='img-wrapper'>
            <img className='comment-giver-img' src={comment.commentBy.imgUrl}/>
        </section>
        <section className='comment-info flex-col'>
            <div className='comment-by-and-when flex'> 
            <span className='comment-by'>{comment.commentBy.fname} </span>
            <span className='comment-at flex'> · {getRelativeTime()} ·<FlagSvg/> </span>
            </div>
            <p className='comment-content'>{comment.content}</p>
        </section>
    </article>
  )
}

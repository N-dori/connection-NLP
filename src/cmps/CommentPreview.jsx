import React from 'react'

export  function CommentPreview({comment}) {
  return (
    <article className='comment-wrapper flex'>
        <section className='img-wrapper'>
            <img src={comment.commentBy.imgUrl}/>
        </section>
        <section className='comment-info flex-col'>
            <div className='comment-by-and-when flex'> 
            <span className='comment-by'>{comment.commentBy.fname}</span><span>two day ago</span>
            </div>
            <p>{comment.content}</p>
        </section>
    </article>
  )
}

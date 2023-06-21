import React from 'react'
import { CommentPreview } from './CommentPreview'

export  function CommentsList({comments}) {
  return (
    <section className='comments-container flex-col' >
        {
            comments.map(comment =>{
                return <CommentPreview comment={comment}/>
            })
        }

    </section>
  )
}

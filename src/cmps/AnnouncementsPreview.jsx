import React, { useEffect, useState } from 'react'
import { imgService } from '../services/imgService'
import { announcementService } from '../services/announcement.service'
import { useDispatch } from 'react-redux'
import { addComment } from '../store/actions/announcement.actions'
import { CommentsList } from './CommentsList'

export  function AnnouncementsPreview({loggedinUser,announcement}) {
    const dispatch =useDispatch()
    const [comment, setComment] = useState(announcementService.getEmptyComment())

    useEffect(() => {
        console.log('courseAnnouncements prop', announcement);
    }, [])
    const handelCommentSubmit = (announcId) => (ev)=>{
        ev.preventDefault()
        comment.commentBy= loggedinUser
        comment.commentAt= Date.now()
      
        console.log('announcement before dispatch',comment);
         dispatch(addComment(announcId,comment))
        }

    const handleChange = ({ target }) => {
        const field = target.name
        let value = target.value
        setComment((preComment) => ({ ...preComment, [field]: value }))
        console.log('comment ', comment);
    }
  return (
    <section key={announcement._id} className='profile-announcement-wrapper'>
    <header className='profile-container flex'>
        <div className='img-container'>
            <img className='profile-img' src={announcement.givenBy.imgUrl} />
        </div>
        <div className='profile-name-container flex-col'>
            <span className='profile-name'>{announcement.givenBy.fname}</span>
            <span className='profile-title'>Master NLP</span>
        </div>
    </header>
    <h1 className='announcement-title'>{announcement.title} </h1>
    <p className='profile-announcement'>{announcement.content}</p>
    <form onSubmit={handelCommentSubmit(announcement._id)} className='comment-container flex'>
        <section className='comment-user-img-container '>
            <img className='user-img' src={imgService.getImg('user')} />
        </section>
        <div className='profile-name-container flex-col'>
            <span className='profile-name'>{loggedinUser.fname}</span>
            <span className='profile-title'>Master NLP</span>
        </div>
        <input onChange={handleChange} value={comment.content} className='comment-input' placeholder='Enter your comment and press enter' name='content' id='content' type='text' />
        
    </form>
    <CommentsList comments={announcement.comments}/>
</section>
  )
}

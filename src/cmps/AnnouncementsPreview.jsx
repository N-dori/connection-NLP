import React, { useEffect, useState } from 'react'
import { announcementService } from '../services/announcement.service'
import { useDispatch } from 'react-redux'
import { addComment } from '../store/actions/announcement.actions'
import { CommentsList } from './CommentsList'
import { FlagSvg } from '../svgs/FlagSvg'
import { InfinitySpin   } from  'react-loader-spinner'
export  function AnnouncementsPreview({loggedinUser,announcement}) {
    const dispatch =useDispatch()
    const [comment, setComment] = useState(announcementService.getEmptyComment())
    const [isShown, setIsShown] = useState(false)

    useEffect(() => {
        console.log('courseAnnouncements prop', announcement);
    }, [])

    const handelCommentSubmit = (announcId) => (ev)=>{
        ev.preventDefault()
        comment.commentBy=  { _id:loggedinUser._id,
                             name:loggedinUser.fname,
                           imgUrl:loggedinUser.imgUrl,
                            email:loggedinUser.email}
        comment.commentAt= Date.now()
      
        console.log('announcement before dispatch',comment);
         dispatch(addComment(announcId,comment))
         setComment(announcementService.getEmptyComment())
         setIsShown(true)
        }

    const handleChange = ({ target }) => {
        const field = target.name
        let value = target.value
        setComment((preComment) => ({ ...preComment, [field]: value }))
        console.log('comment ', comment);
    }
    const getComments =  () => {
        setIsShown(!isShown)
    }
    const getRelativeTime = () => {
        const DAY = 1000 * 60 * 60 * 24
        const HOUR = 1000 * 60 * 60
        const pastTime =(announcement?.givenAt- Date.now() )/HOUR
        const rtf1 = new Intl.RelativeTimeFormat('he', { style: 'short' });
        // console.log('pastTime',pastTime.toFixed(0));
        return rtf1.format(pastTime.toFixed(0), 'hour')
    }
  return (
    announcement? <section key={announcement._id} className='profile-announcement-wrapper'>
    <header className='profile-container flex'>
        <div className='img-container'>
            <img className='profile-img' src={announcement.givenBy.imgUrl} />
        </div>
        <div className='profile-name-container flex-col'>
            <span className='profile-name'>{announcement.givenBy.name}</span>
            <span className='profile-title flex'>
                הודעה פורסמה  · {getRelativeTime()} ·<FlagSvg/>
            </span>
        </div>
    </header>
    <h1 className='subject-title'>{announcement.title} </h1>
    <p className='announcement-content flex'>{announcement.content}</p>
    <form onSubmit={handelCommentSubmit(announcement._id)} className='comment-container flex'>
        <section className='comment-user-img-container '>
            <img className='user-img' src={loggedinUser.imgUrl} />
        </section>
     
        <input onChange={handleChange} value={comment.content} className='comment-input' placeholder='Enter your comment ' name='content' id='content' type='text' />
        <button className='announcement-content-btn' type='submit'>שלח</button>
    </form>
   {isShown? <CommentsList comments={announcement.comments}/>:''}
   {(announcement.comments.length>0)? <h2 className='show-comments-btn' onClick={getComments}>
    {isShown?'הסתר תגובות ':`הצג תגובות (${announcement.comments.length})`}</h2>:<h3>תיהיה הראשון להגיב על זה</h3>}

</section>:<InfinitySpin 
         width='200'
         color="#448cfb"
       />
  )
}

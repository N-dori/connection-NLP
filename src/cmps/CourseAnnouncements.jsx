import React, { useEffect, useState } from 'react'
import { announcementService } from '../services/announcement.service'
import { userService } from '../services/userService'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addAnnouncements } from '../store/actions/announcement.actions'
import { AnnouncementsList } from './AnnouncementsList'
import { InfinitySpin   } from  'react-loader-spinner'
export function CourseAnnouncements() {
  
  const  param = useParams()
  const dispatch =useDispatch()
  const announcements = useSelector((storeState) => storeState.announcementModule.announcements)

  const [announcement, setAnnouncement] = useState(announcementService.getEmptyAnnouncement())
  const [courseAnnouncements, setCourseAnnouncements] = useState(null)
  const [loggedinUser, setLoggedinUser] = useState()

  useEffect(()=>{
    loadLoggedinUser()
    loadCourseAnnouncements()
  },[announcements])

 const loadCourseAnnouncements = () => {
  if(announcements){
    console.log('courseAnnouncements',announcements, param.id);
   const courseAnnouncements= announcements.filter(announcement=>announcement.courseId === param.id)
   console.log('courseAnnouncements',courseAnnouncements);
   setCourseAnnouncements(courseAnnouncements)
  }
 }

  const loadLoggedinUser = async  () => {
    const loggedinUser = await userService.getLoggedinUser()
    const user = await userService.getUserById(loggedinUser._id)
    console.log('loadLoggedinUser cmp : user',user);
    setLoggedinUser(user)
  }

  const handleChange = ({ target }) => {
    const field = target.name
    let value = target.value
  setAnnouncement((preCAnnoun) => ({ ...preCAnnoun, [field]: value }))
}

const handelSubmit = (ev) => {
  ev.preventDefault()
  announcement.courseId= param.id
  announcement.givenBy= {
                         _id:loggedinUser._id,
                         name:loggedinUser.fname,
                         imgUrl:loggedinUser.imgUrl,
                         email:loggedinUser.email
                        }
  announcement.givenAt= Date.now()
  console.log('announcement',announcement);
   dispatch(addAnnouncements(announcement))
   setAnnouncement(announcementService.getEmptyAnnouncement())
  }

  return (
    loggedinUser?
    <section className='announcements-container'>
      <section className='announcement-wrapper'>
        {
        loggedinUser.isAdmin ?
        
        <section className='announcement-input-container flex-col'>
        <header className='profile-container flex'>
          <div className='img-container'>
            <img className='profile-img' src={loggedinUser.imgUrl} />
          </div>
          <div className='profile-name-container flex-col'>
            <span className='profile-name'>{loggedinUser.fname}</span>
            <span className='profile-title'>Master NLP</span>
          </div>
        </header>
     
          <form className='form-container flex-col' onSubmit={handelSubmit}>
            <p><label htmlFor="content">הודעה של יוצר הקורס:</label></p>
            <input className='announcement-title'  onChange={handleChange} value={announcement.title}  placeholder='Enter title' name='title' id='title' type='text' />
            <textarea   className="text-area-input" onChange={handleChange} value={announcement.content} id="content" name="content" placeholder='Enter announcement'></textarea>
            <br />
            <button className="announcement-submit-btn " type="submit" value="send">send</button>
          </form>
        </section> : ''
        }
{courseAnnouncements?

<AnnouncementsList loggedinUser={loggedinUser} courseAnnouncements={courseAnnouncements}/>
:"No Announcements was given to this course"
}
        
      </section>

    </section>:<InfinitySpin 
         width='200'
         color="#448cfb"
       />
  )
}

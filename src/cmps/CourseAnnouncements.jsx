import React from 'react'
import { imgService } from '../services/imgService'

export  function CourseAnnouncements() {
  return (
    <section className='announcements-container'>
      <article className='announcement-wrapper'>
      <header className='profile-container flex'>
        <div className='img-container'>
          <img className='profile-img' src={imgService.getImg('user')}/>
        </div>
        <div className='profile-name-container flex-col'>
          <span className='profile-name'>Admin Adminuv</span> 
          <span className='profile-title'>Master NLP</span> 
          </div>
      </header>
      <section className='profile-announcement-container'>
        <h1 className='announcement-title'>help me to improve </h1>
        <p className='profile-announcement'>"Hey there,
PRE-S: If you already got this from my newsletter (which you should totally subscribe to ;) just ignore this message.
First of all, thank you for being a wonderful student of this course!
Now as 2021 comes to a close, I'm starting to think about the next big course I'm gonna build in 2022. But I need your feedback to make it even better than my current courses.
So if you want to give your (very valuable!) feedback for my next course, please fill out this quick form, it will take you 5 minutes max, I promise.Thanks a ton! Your help really makes a difference :DHappy coding!Jonas</p>
      "</section>
      <section className='comment-container flex'>
      <section className='comment-user-img-container '>
        <img className='user-img' src={imgService.getImg('user')}/>
      </section>
      <input className='comment-input' placeholder='Enter your comment' name='comment' id='comment' type='text'/>
      </section>
      </article>

    </section>
  )
}

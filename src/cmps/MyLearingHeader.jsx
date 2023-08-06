import React, { useEffect, useState } from 'react'
import { ExpandSvg } from '../svgs/ExpandSvg'
import { Link } from 'react-router-dom'

export  function MyLearingHeader({course,user}) {

  const [isYourProgress,setIsYourProgress] = useState(false)
  const [totalvideos,setTotalVideos] = useState(0)
  const [totalFullyWatchedVidoes,setTotalFullyWatchedVidoes] = useState(0)
    const logoUrl = 'https://res.cloudinary.com/dii16awkb/image/upload/v1685878172/%D7%9C%D7%95%D7%92%D7%95_fpn8ig.jpg'
useEffect(() => {
    getLecturesSum(course)
    getfullyWatchedVideosSum(user)
}, [user])

 const getfullyWatchedVideosSum = (user) => {
          let sum=0
          if(user){
              const {courses} =user
              const studentCourse = courses.find(currCourse => currCourse._id === course._id)
              if(studentCourse){
                //   const {fullyWatched} = studentCourse
                  if(studentCourse.fullyWatched){
                    studentCourse.fullyWatched.forEach(watchedEpisode => {
                          sum += watchedEpisode.subEpisodes.length
                        //   console.log('************getfullyWatchedVideosSum',sum);
                          setTotalFullyWatchedVidoes(sum)
                });

                  }
        }
       }
 }

    const getLecturesSum = (course) =>{
        let sum =0 
        if(course){
             const {episodes} = course
            episodes.forEach(episode => {
                sum+= episode.subEpisodes.length
            });
            // console.log('**********getLecturesSum',sum);
            setTotalVideos(sum)
            return sum
        }
       }
       const handleMouseMove = (ev) => {
        setTimeout(() => {
            setIsYourProgress(false)
            
        }, 4000);
       }


  return (
    <section className='my-learning-header-container flex-sb'>
        <Link to='/our-courses' className='logo-container flex'>
            <img src={logoUrl} alt="logo" className="my-learning-logo" />
            <span className='pipe'></span>
        <h1 className='my-learning-course-title  '>{course.title}</h1>
        </Link>
        <div className='progress-container flex-col' onClick={()=>setIsYourProgress(true)} onMouseMove={(ev)=> handleMouseMove(ev)}>
            <progress className='progress-input'  max={totalvideos} value={totalFullyWatchedVidoes}></progress>
            <span className='your-progress-txt flex-ac'>ההתקדמות שלך <ExpandSvg/></span>
        </div>
       {isYourProgress? <div className='details-contianer'>
            <p className='txt'> השלמת {totalFullyWatchedVidoes} מתוך {totalvideos} </p>
        </div>:''}
        </section>
  )
}

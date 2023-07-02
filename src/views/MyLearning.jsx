import React, { useCallback, useEffect, useRef, useState } from 'react'
import { YouTube } from '../cmps/YouTube'
import { MyLearningContent } from '../cmps/MyLearningContent'
import { Link, Outlet, useParams } from 'react-router-dom'
import { courseService } from '../services/course.service'
import ReactPlayer from 'react-player'
import { OutletMenu } from '../cmps/OutletMenu'
import { updateCurrTimeWacth } from '../store/actions/user.actions'
import { useDispatch, useSelector } from 'react-redux'
import { userService } from '../services/userService'


export  function MyLearning({currCourseId,videoUrl,setVideoUrl,setCurrCourseId}) {
  const dispatch = useDispatch()
  const playerRef =useRef()
  const  param = useParams()
  const loggdingUser = useSelector((storeState) => storeState.userModule.loggdingUser)
  const [course, setCourse] = useState()
  const [currEpisode, setCurrEpisode] = useState(null)
  const [currSubEpisode, setCurrSubEpisode] = useState(null)
  
  const [isContentShown, setIsContentShown] = useState(true)
  
  const [isPlayingFirstTime, setIsPlayingFirstTime] = useState(0);
  const [lastWatchTime, setLastWatchTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const lastWatchTimeRef =useRef(lastWatchTime)
  
  useEffect(()=>{
    loadCourse()
    loadLastVideo()
    setCurrCourseId(param.id)
    getLecturesSum()

    return () => {
      // when copmponent unmount we save last watch time and updateing the user.
      updateCourseCurrTimeWacth()
      
    };
  },[currEpisode,currSubEpisode,lastWatchTimeRef])
  
  const updateCourseCurrTimeWacth = () => {
    dispatch(updateCurrTimeWacth(loggdingUser?._id,currCourseId,currEpisode,currSubEpisode,lastWatchTimeRef.current,videoUrl))
    
}
 const loadLastVideo = async () => {
  if(loggdingUser){
    const user = await userService.getUserById(loggdingUser._id)
    const course = user.courses.find(course=>course._id === param.id )
    if(!course.lastVideoWatched){
      return
    }
    const {lastVideoWatched} = course
  
    if(isPlayingFirstTime === 0){
        setLastWatchTime(lastVideoWatched.lastTimeWatched)
        setVideoUrl(lastVideoWatched.videoUrl)  
    }

  }
 }
  const getLecturesSum = () =>{
    let total = []
    let sum =0 
    if(course){
      course.episodes.forEach(episode => {
     sum+= episode.subEpisodes.length
      });
      for (let i = 1; i < sum; i++) {
        total.push(i)
       
      }
      // console.log('sum sum sum',course._id);
        return total
    }
   }

  const loadCourse = async () => {
    if(loggdingUser){
      const user = await userService.getUserById(loggdingUser._id) 
  
        const course = user.courses.find(course=>course._id === param.id )
        setCourse(course)
        if(!course.lastVideoWatched){
          return 
        }

    }
      

    // setCurrEpisode(course.lastVideoWatched.episode)
    // console.log('my learning course',course); 
  }
 
  const tuggleContent = () => {
    setIsContentShown(!isContentShown)
  }
  const handleProgress = (progress) => {
    setLastWatchTime((progress.played * duration).toFixed(0))
    lastWatchTimeRef.current= +(progress.played * duration).toFixed(0)
    // console.log('onProgress', progress.played)
    // console.log('lastWatchTime', lastWatchTimeRef)
    // console.log('currEpisode', currEpisode)
    // console.log('currSubEpisode', currSubEpisode)
  }
 const  handleDuration = (duration) => {
  setDuration(duration)
    console.log('onDuration', duration)
  
  }
  
 const handelSeekTime = () => {
   if(isPlayingFirstTime === 0){
     setIsPlayingFirstTime(isPlayingFirstTime+1)
      const timeToStart = +lastWatchTime
      // console.log('timeToStarttttttttttttttt',+lastWatchTime);
      playerRef.current.seekTo(timeToStart, 'seconds');
   }
 }

  return (
    course?
    
    <section className='my-leanring-container '>
      <section className='my-learning-warpper grid '>
        <div className={isContentShown?'':'open-content flex-jc-ac'} onClick={tuggleContent}>
          <span className={isContentShown?'hidden':'display-content'}>הצג תוכן </span>
        </div>
  <section style={isContentShown?{}:{gridColumn:"1/-1"}} className='video-player-container'>
  <ReactPlayer 
  ref={playerRef}
      className="react-player"
      playing={true}
      onProgress={ handleProgress }
      onDuration={ handleDuration }
      onPlay={ handelSeekTime }
        
      controls={true}
      // width="100%"
      // height="100%"
       url={videoUrl?videoUrl:course.episodes[0].subEpisodes[0].videoUrl}/>
  </section>
  <section className={isContentShown?'my-learning-content-container':'hidden'}>
  <MyLearningContent 
  episodes={course.episodes}
  subEpisodes={course.subEpisodes}
  getLecturesSum={getLecturesSum}
  setVideoUrl={setVideoUrl}
  tuggleContent={tuggleContent}
  setCurrSubEpisode={setCurrSubEpisode}
  setCurrEpisode={setCurrEpisode}
  currEpisode={currEpisode}
  currSubEpisode={currSubEpisode}
   lastEpisode={course.lastVideoWatched?course.lastVideoWatched.episode:''}
/>


      </section>
  <section style={isContentShown?{ }:{gridColumn:"1/-1"}} className='course-menu-contianer'>
 <OutletMenu />
  <section className='outlets-warpper'>
<Outlet></Outlet>
  </section>
  </section>
  </section>
</section>:<div>Loding...</div>
  )
}

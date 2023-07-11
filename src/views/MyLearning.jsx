import React, { useEffect, useRef, useState } from 'react'
import { MyLearningContent } from '../cmps/MyLearningContent'
import { Outlet, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { OutletMenu } from '../cmps/OutletMenu'
import { updateCurrTimeWacth } from '../store/actions/user.actions'
import { useDispatch } from 'react-redux'
import { userService } from '../services/userService'
import { courseService } from '../services/course.service'
import { InfinitySpin } from 'react-loader-spinner'

export function MyLearning({ lastSubEpisode, setLastSubEpisode, lastEpisode, setLastEpisode, currCourseId, videoUrl, setVideoUrl, setCurrCourseId }) {

  const dispatch = useDispatch()
  const playerRef = useRef()
  const param = useParams()
  const [course, setCourse] = useState()

  const [isContentShown, setIsContentShown] = useState(true)

  const [isPlayingFirstTime, setIsPlayingFirstTime] = useState(0);
  const [lastWatchTime, setLastWatchTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const lastWatchTimeRef = useRef(lastWatchTime)
  const loggdingUserRef = useRef({})

  useEffect(() => {
    loadCourse()
    loadLastVideo()
    setCurrCourseId(param.id)
    getLecturesSum()
  setTimeout(() => {
  }, 1000);
  return () => {
    // when copmponent unmount we save last video and last watch time and updating the user.
    // console.log('lastWatchTimeRef lastWatchTimeRef lastWatchTimeRef lastWatchTimeRef',lastWatchTimeRef);
    updateCourseCurrTimeWacth()
  };
  }, [lastEpisode, lastSubEpisode, lastWatchTimeRef, loggdingUserRef])
  
  const updateCourseCurrTimeWacth = () => {
    dispatch(updateCurrTimeWacth(loggdingUserRef.current._id, currCourseId, lastEpisode, lastSubEpisode, lastWatchTimeRef.current, videoUrl))
    
  }
  const loadLastVideo = async () => {
    const loggdingUser = await userService.getLoggedinUser()
    if (loggdingUser) {
      const user = await userService.getUserById(loggdingUser._id)
      const course = user.courses.find(course => course._id === param.id)
      if (!course.lastVideoWatched) {
        return
      } else {
        const { lastVideoWatched } = course
        // after getting the user and course setting lastwatch time and last url
        if (isPlayingFirstTime === 0) {
          console.log('setting last time watch and url********************',lastVideoWatched);
          setLastWatchTime(lastVideoWatched.lastTimeWatched)
          setVideoUrl(lastVideoWatched.videoUrl)
          setLastEpisode(lastVideoWatched.episode)
          setLastSubEpisode(lastVideoWatched.subEpisode)
        }
      }

    }
  }
  const getLecturesSum = () => {
    let total = []
    let sum = 0
    if (course) {
      course.episodes.forEach(episode => {
        sum += episode.subEpisodes.length
      });
      for (let i = 1; i < sum; i++) {
        total.push(i)

      }
      return total
    }
  }

  const loadCourse = async () => {
    const loggdingUser = await userService.getLoggedinUser()
    loggdingUserRef.current = loggdingUser
    if (loggdingUser) {
      const course = await courseService.getCourseById(param.id)
      setCourse(course)
      if (!course.lastVideoWatched) {
        return
      }
    }
  }

  const tuggleContent = () => {
    setIsContentShown(!isContentShown)
  }
  const handleProgress = (progress) => {
    const elaps = progress.played * (duration)
    setLastWatchTime((progress.played * duration).toFixed(0))
    lastWatchTimeRef.current = +(progress.played * duration).toFixed(0)
    // console.log('elaps', elaps)
  }
  const handleDuration = (duration) => {
    setDuration(duration)
    console.log('onDuration in min === duration/60', duration / 60)

  }

  const handelSeekTime = () => {
    if (isPlayingFirstTime === 0) {
      setIsPlayingFirstTime(isPlayingFirstTime + 1)
      const timeToStart = +lastWatchTime
      console.log('timeToStarttttttttttttttt', +lastWatchTime);
      playerRef.current.seekTo(timeToStart, 'seconds');
    }
  }

  return (
    course ?

      <section className='my-leanring-container '>
        <section className='my-learning-warpper grid '>
          <div className={isContentShown ? '' : 'open-content flex-jc-ac'} onClick={tuggleContent}>
            <span className={isContentShown ? 'hidden' : 'display-content'}>הצג תוכן </span>
          </div>
          <section style={isContentShown ? {} : { gridColumn: "1/-1" }} className='video-player-container'>
            <ReactPlayer
              ref={playerRef}
              className="react-player"
              playing={true}
              onDuration={handleDuration}
              onProgress={handleProgress}
              onPlay={handelSeekTime}

              controls={true}
              // width="100%"
              // height="100%"
              url={videoUrl ? videoUrl : course.episodes[0].subEpisodes[0].videoUrl} />
          </section>
          <section className={isContentShown ? 'my-learning-content-container' : 'hidden'}>
            <MyLearningContent
              episodes={course.episodes}
              subEpisodes={course.subEpisodes}
              getLecturesSum={getLecturesSum}
              setVideoUrl={setVideoUrl}
              tuggleContent={tuggleContent}
              setLastSubEpisode={setLastSubEpisode}
              setLastEpisode={setLastEpisode}
              lastSubEpisode={lastSubEpisode}
              lastEpisode={ lastEpisode }
            />
            


          </section>
          <section style={isContentShown ? {} : { gridColumn: "1/-1" }} className='course-menu-contianer'>
            <OutletMenu />
            <section className='outlets-warpper'>
              <Outlet></Outlet>
            </section>
          </section>
        </section>
      </section> :
      <section className='loder-container flex-jc-ac'>
        <div className='flex-jc-ac'>
          <InfinitySpin
            className='spinner'
            width='200'
            color="#448cfb" />
        </div>
      </section>
  )
}

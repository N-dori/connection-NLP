import React, { useEffect, useState } from 'react'
import { XSvg } from '../svgs/XSvg'
import { Leasson } from './Leasson'

export  function MyLearningContent({crrCourseId,user,lastEpisode,lastSubEpisode,setLastEpisode,currEpisode,setLastSubEpisode,getLecturesSum,episodes,setVideoUrl,tuggleContent}) {
  const [count, setCount] = useState(1)
  const [userCourse, setUserCourse] = useState({})
  
  useEffect(() => {
    if(user){}
const {courses} = user
const course = courses.find(course => course._id  === crrCourseId)
setUserCourse(course)
  }, [user])
  

  return (
<>
<section className='my-learning-header-wapper flex-sb'>
    <h1 className='headline'>תוכן הקורס</h1>
    <div className="x-svg-container"onClick={tuggleContent}>
    <XSvg />

    </div>
    </section>
  
    {
      userCourse?
      episodes.map((episode,i) =>{
        let fullyWatchedEpisode
        if(userCourse.fullyWatched){
          const {fullyWatched} =  userCourse
           fullyWatchedEpisode = fullyWatched.find(currEpisode=> currEpisode.episode === episode.id ) 
        }
        const{id,title,subEpisodes} = episode

        return <Leasson key={id}
         i={i} 
        episodeId={id}
        title={title} 
        subEpisodes={subEpisodes}
        setCount={setCount}
        count={count}
        getLecturesSum={getLecturesSum}
        setVideoUrl={setVideoUrl}

        setLastSubEpisode={setLastSubEpisode}
        setLastEpisode={setLastEpisode}
        currEpisode={currEpisode}
        lastEpisode={lastEpisode}
        lastSubEpisode={lastSubEpisode}

        fullyWatchedEpisode={fullyWatchedEpisode}
        />
      }):''
      }
</>
   
  )
}

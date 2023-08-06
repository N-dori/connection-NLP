import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export  function UserCoursesPreview({course}) {

const [totalvideos,setTotalVideos] = useState(0)
const [totalFullyWatchedVidoes,setTotalFullyWatchedVidoes] = useState(0)
const courses = useSelector((storeState) => storeState.couresModule.courses)

useEffect(() => {
    getfullyWatchedVideosSum()
    getLecturesSum()
}, [])

const getDate = () => {
    const date = new Date(course.purchasedAt );
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDay()
     return `${day}/${month}/${year}`
}
const getfullyWatchedVideosSum = () => {
    let sum=0
    if(course.fullyWatched){
        course.fullyWatched.forEach(watchedEpisode => {
              sum += watchedEpisode.subEpisodes.length
              setTotalFullyWatchedVidoes(sum)  });
    }
  }
 
const getLecturesSum = () =>{
  let sum =0 
  const studentCourse = courses.find(currCourse => currCourse._id === course._id)
  if(studentCourse){
       const {episodes} = studentCourse
      episodes.forEach(episode => {
          sum+= episode.subEpisodes.length
      });
      setTotalVideos(sum)
      return sum
  }
 }
 
  return (
    <>
    <li className='item item1'>{course.title}</li>
    <li className='item item2'>{getDate()}</li>
    <li className='item item3'>נצפו והושלמו  {totalFullyWatchedVidoes} פרקים מתוך {totalvideos}</li>
    
    </>
  )
  }

import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { MyLearningNavigation } from './MyLearningNavigation'

export  function OutletMenu({scrollToMyLearningOutlet}) {
  const navigate= useNavigate()
  const  param = useParams()
    const [isClicked, setIsClick] = useState('Overview')

    useEffect(() => {
      navigate(`/my-learning/${param.id}/course-overiew`)
    }, [])
    
    const setUnderline = (type) => {
      scrollToMyLearningOutlet()
        switch (type) {
          case 'Search':
            setIsClick('Search')
            break;
            case 'Overview':
                setIsClick('Overview')
                  break;
            case 'Q&A':
                setIsClick('Q&A')
                  break;
            case 'Announcements':
                setIsClick('Announcements')
                  break;
            case 'Reviwes':
                setIsClick('Reviwes')
                  break;
              }
      }
  return (
    <MyLearningNavigation  setUnderline={setUnderline} setIsClick={setIsClick} isClicked={isClicked}/>
 
  )
}

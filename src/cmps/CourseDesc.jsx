import React from 'react'

export  function CourseDesc({desc}) {
  return (
    <div className='desc-wrapper'>
        <h1 className='headline'>תיאור הקורס</h1>
        <p>{desc}   </p>
    </div>
  )
}

import React from 'react'
import { Avatar } from '../svgs/Avatar'

export  function CourseInstructor() {
    return (
        <section className='course-instructor-wapper'>
        <h1 className='headline'>מוביל הקורס</h1>

        <h4 className='instructor-name'>שלמה שושן </h4>
        <h5 className='instructor-title'> מייסד ומפתח  <span className='tc-b'>NLP CONNECTION</span> </h5>

        <div className='instructor-info-container flex'>
            <div className='img-contaier'>
            <Avatar/>    
            </div>
        </div>
        <p className="instructor-bio">
        ממציא ומייסד קורס ADVENCE (למתקדמים) <span className='tc-b'>NLP CONNECTION</span> מייסד ומפתח 
        מייסד NLP CONNECTION  ממציא ומפתח של קורס ADVENCE  למתקדמים הקורס הייחודי מסוגו בארץ ! מנכ'ל NLP חיבורים ומרצה בכיר בחברה . 
נפטר מהמחלה האיומה בשנת 2019 
אתר הוקם להנצחתו ולעילוי נשמתו 
        </p>
         
    </section>
  )
}

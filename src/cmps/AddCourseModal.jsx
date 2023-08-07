import React from 'react'
import { XSvg } from '../svgs/XSvg'

export  function AddCourseModal({addCourse ,setIsAddCourse,isAddCourse}) {
  return (
    <section className='add-course-modal-container flex-jc-ac'>
         <span className='close-add-course-modal' onClick={()=> setIsAddCourse(!isAddCourse)}><XSvg/></span>

    <form  className="add-course-from flex-col" onSubmit={addCourse}>
                        <label className='headline' htmlFor="course-select">קורס להוספה</label>

                        <select className="select-courses" name="course" id="course-select">

                            <option value="NLP Practitioner" >NLP Practitioner</option>
                            <option value="NLP Master" >NLP Master</option>
                            <option value="  קורס  למתקדמים ומטפלים Advence" >  קורס  למתקדמים ומטפלים Advence</option>

                        </select>
                        <button className="edit-user-btn">הוסף קורס</button>
                            
                    </form>

    </section>
  )
}

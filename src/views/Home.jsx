import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { imgService } from '../services/imgService'
import { CoursesIndex } from '../cmps/CoursesIndex'
export  function Home() {

  
const loggdingUser = useSelector((storeState) => storeState.userModule.loggdingUser)
console.log("loggdingUser",loggdingUser);
  return (
    <section className='home-page-container'>
        <section className='hero-img-container'>
    {loggdingUser?
     <p className='home-greeting'>hello {loggdingUser.fullname?loggdingUser.fullname:loggdingUser.fname}</p>
     :<div>Hello Guest</div>}

       </section>
       <section className='title-container'>
        <h1>A broad selection of courses</h1>
        <h3>Choose from over 210,000 online video courses with new additions published every month</h3>
       <CoursesIndex/>
        </section> 

    </section>
  
    
    )
}

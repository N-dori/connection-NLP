import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { imgService } from '../services/imgService'

export  function ShoppingCart() {
  // const loggdingUser = useSelector((storeState) => storeState.userModule.loggdingUser)
  // const courses= loggdingUser.courses
  const param = useParams()
  
   

  return (
   
    <section  className='my-courses-list-container'>
      <h1>Shopping-Cart</h1>
      

<section  className='course-preview grid'>
  <span className='grid-item1'> course</span>
  <span className='grid-item2'>name</span>
  <span className='grid-item3'>price</span>
  <span className='grid-item4'>total videos</span>
  <span className='grid-item5'>watch videos</span>

  <span className='course-name grid-item2' >fgdgf</span>
  <div style={{width:100+"px"}} className='img-container grid-item1'>
<img src={imgService.getImg('giveTalk')} alt="image-coures" className="coures-img" />
  </div>
  <span className='grid-item3'>23</span>
  <span className='grid-item4'>66</span>
  <Link className='grid-item5' to={`/course-watch/${123}`}>watch</Link>
</section>       
  </section>
  )
}

import React from 'react'
import { imgService } from '../services/imgService'
import { Link } from 'react-router-dom'

export  function ProductPreview({product}) {
  return (
    <>
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
    
    </>
  )
}

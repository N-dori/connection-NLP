import React, { useEffect } from 'react'
import { imgService } from '../services/imgService'
import { Link } from 'react-router-dom'
import { PriceSvg } from '../svgs/PriceSvg'
export  function ProductPreview({onRemove,product}) {
  // const {title,courseCoverImg,totalVideos,price} = product
 
  
  return (
    product?
    <>
    <div  className='img-container grid-item1'>
  <img src={product.courseCoverImg} alt="image-coures" className="coures-img" />
   
    </div>
    <div className='product-general-info grid-item2 flex-clo '>
    <div className='headlines-container flex-col'>
    <span className='product-name' >{product.title}</span>
    <span className='product-created-by'>By {product.createdBy} </span>
    </div>
   
    <div className=' product-in-numbers flex'>
    <span className='total-videos'>{product.totalVideos} total hours</span>
    <span className='total-videos'>{product.totalHours} lectures</span>
    <span className='total-videos'>{product.level} level</span>
    </div>
    </div>
    <div className=' remove-btn-container flex-col'>
    <span className='remove-btn' onClick={()=>{onRemove(product._id)}}>Remove</span>
    </div>
    <div className='grid-item5 product-price-container flex'>
    <span className='product-price'>{product.price}</span>
    <PriceSvg/>
    </div>
    {/* <Link className='grid-item5' to={`/course-watch/${123}`}>watch</Link> */}
    
    </>:<div>Loading....</div>
  )
}

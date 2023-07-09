import React from 'react'
import { PriceSvg } from '../svgs/PriceSvg'
import { InfinitySpin   } from  'react-loader-spinner'


export  function ProductPreview({onRemove,product}) {

 
  const getLecturesSum = () =>{
    console.log('product product',product);
    let sum =0 
    product.episodes.forEach(episode => {
   sum+= episode.subEpisodes.length
    });
    return sum
  
     
   }
  return (
    product?
    <>
    <div  className='img-container grid-item1'>
  <img src={product.courseCoverImg} alt="image-coures" className="coures-img" />
   
    </div>
    <div className='product-general-info grid-item2 flex-clo '>
    <div className='headlines-container flex-col'>
    <span className='product-name' >{product.title}</span>
    <span className='product-created-by'>{product.insructorName} </span>
    </div>
   
    <div className=' product-in-numbers flex'>
    <span className='total-videos'>סך הכל שעות {getLecturesSum()} </span>
    <span className='total-videos'>הרצאות  {product.totalHours} </span>
    <span className='total-videos'> דרגה {product.level}</span>
    </div>
    </div>
    <div className=' remove-btn-container flex-col'>
    <span className='remove-btn' onClick={()=>{onRemove(product._id)}}>Remove</span>
    </div>
    <div className='grid-item5 product-price-container flex'>
    <span className='product-price'>{product.price}</span>
    <PriceSvg/>
    </div>
    
    </>:       <InfinitySpin 
              width='200'
              color="#448cfb"
            />
  )
}

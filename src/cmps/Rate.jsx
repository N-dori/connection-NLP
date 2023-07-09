import React, { useState } from 'react'
import  {FaStar}  from 'react-icons/fa'

const colors ={
    orange:"#f5ed3b",
    gray:'#DCDCDC'
} 
export  function Rate({setRating}) {
    const stars =Array(5).fill(0)

const [currValue,setCurrValue] =useState(0)
const [hoverValue,setHoverValue] =useState(null)

   const handelClick = (value) => {
    console.log('setCurrValue',value);
    setCurrValue(value)
    setRating(value)
   }
    const handelMouseOver = value => {
        console.log('setHoverValue',value);
        setHoverValue(value)
    }   
    const handelMouseLeave = value => {
        setHoverValue(null)
    }   

  return (
    <section className='starts-rating-container flex-jc-ac'>
    <div className="stars">
       {stars.map((_,idx) => {
           return <FaStar key={idx}
                          size={25}
                          style={{marginRight:8 ,cursor:'pointer'}}
                          color={(hoverValue || currValue) > idx ? colors.orange:colors.gray }
                          onClick={() => { handelClick(idx +1)}}
                          onMouseOver={() => handelMouseOver(idx+1)}
                          onMouseLeave={handelMouseLeave}/>
       })}
    </div></section>
  )
}

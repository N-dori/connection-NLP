import { useNavigate } from 'react-router-dom'
import React from 'react'


export  function BackSvg() {
    const navigate = useNavigate()
  return (
<svg  onClick={()=>navigate('/dashboard') } 
    className='back-svg' xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M400-80 0-480l400-400 56 57-343 343 343 343-56 57Z"/></svg>
  )
}

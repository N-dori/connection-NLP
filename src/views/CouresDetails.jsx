import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { couresService } from '../services/coures.service';
import { YouTube } from '../cmps/YouTube';
import { useSelector } from 'react-redux';

export  function CouresDetails() {
  const loggdingUser = useSelector((storeState) => storeState.userModule.loggdingUser)

    const navigate = useNavigate()
    const  param = useParams()
    console.log('param',param);
    const [coures, setCoures] = useState()
    const [isShown, setIsShown] = useState(false)
    
    useEffect(() => {
      loadCoures(param.id)
    }, [])
    // useEffect(() => {
    // }, [isShown])

    const loadCoures = async (CouresId) => {
      const coures = await couresService.getCourseById(CouresId) 
      setCoures(coures)
      
    }
    const isLoggedin = () => {
      console.log('hoooo');
      if(loggdingUser){
     console.log('true in ');
     navigate(`/purchase-course/${param.id}`)
    }else{
     console.log('false in ');
     setIsShown(true)
    }
  }  
  const toggleUserMsg = () => {
    setIsShown(false)
  }
  return (
    coures? 
<section className='coures-detail-container flex-jc-ac'>

 <p>{coures.title}</p>
 <YouTube videoUrl={coures.videoUrl}/>
<p className='sub-title'>{coures.subTitle}</p> 
<h3>Why should I Be Doing it?</h3>
<ul>
  <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </li>
  <li>adipisci ratione quia esse ea repellendus eos totam odio</li>
  <li>consectetur adipisicing elit. Atque</li>
  <li>Atque asperiores nesciunt quibusdam ipsam animi iure ipsa explicabo, voluptatem totam assumenda! Obcaecati !</li>
</ul>
<section className={isShown?'userMsg block':'hidden'} >
   <h1>need to sign up first!!!!!!!!</h1>
   <button onClick={toggleUserMsg}>close</button>
   </section>
<button className='btn-purchase' onClick={isLoggedin}>Purchase-Now!</button>
</section>
:<div>Loading....</div>
 

  )
}

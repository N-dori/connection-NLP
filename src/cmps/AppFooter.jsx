import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { Link, useLocation } from 'react-router-dom'
import { FlashSvg } from '../svgs/FlashSvg'
export function AppFooter() {
  const location = useLocation()
  const [isShown,setIsShown] = useState(true)

  useEffect(() => {
  if(location.pathname.slice(1,7) === 'course'){
    setIsShown(!isShown)
  }else{
    setIsShown(true)
  }

  }, [location.pathname])
  
  
  return (isShown?
    <section className='app-footer-container flex-rev'>

      <section className='logo-footer-container flex-jc-ac'>
        <div className="img-wrapper">
          <img src="https://res.cloudinary.com/dii16awkb/image/upload/v1688901067/logo-footer_hcvgn9.jpg" alt="logo footer"
            className="logo-footer" />

        </div>
      </section>
      <section className='social-networks-links flex-jc-ac'>
        <ul>
          <li className='facebook-wrapper clean '>
            <Link className="facebook flex-sb" to="/our-courses">
            <span className='fb-txt'>חפשו אותנו בפייסבוק</span>

          <FontAwesomeIcon size="2xl" color='#448cfb' icon={faSquareFacebook} className='facebook-svg'/>
            </Link>
          </li>

        </ul>


      </section>
      <section className='all-right-reserved flex-jc-ac'>
        <span className='website-creator'>Powered by - Nadav Dori</span><FlashSvg />
      </section>
    </section>:''
  )
}

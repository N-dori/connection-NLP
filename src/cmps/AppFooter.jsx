import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
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
          <li className='facebook-wrapper flex-ac  flex-rev'>
            <Link className="facebook flex" to="/our-courses">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <FontAwesomeIcon style={{ width: '35px', height: '20px' }} className=''
                icon={faFacebookF} />
            </Link>
            <span className='fb-txt'>חפשו אותנו בפייסבוק</span>
          </li>

        </ul>


      </section>
      <section className='all-right-reserved flex-ac'>
        <span>powered by - Nadav Dori</span><FlashSvg />
      </section>
    </section>:''
  )
}

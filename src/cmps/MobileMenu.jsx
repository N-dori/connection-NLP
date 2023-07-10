import { useEffect } from "react";
import { useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";

export default function MobileMenu({scrollToMemorial,scrollToWhatTools,scrollToNlpBenefits,toggelMobileMenu,scrollToCourses,scrollToWhoAreWe,isMobileMenu}) {

const navigate = useNavigate()
const loggdingUser = useSelector((storeState) => storeState.userModule.loggdingUser)

useEffect(() => {

}, [loggdingUser])


 const handelClick = (ev,type) => {
  navigate('/')
  setTimeout(() => {
    if(type === 'courses') scrollToCourses()
    if(type === 'who-are-we') scrollToWhoAreWe()
    if(type === 'benefits') scrollToNlpBenefits()
    if(type === 'tools') scrollToWhatTools()
    if(type === 'memorial') scrollToMemorial()
    
  }, 200);

}
const handelNavigation = (ev,type) => {

  if(type === 'login')navigate(`${type}`)
  if(type === 'signup')navigate(`${type}`)
  if(type === 'my-courses')navigate(`${type}`)
  toggelMobileMenu()
 }

  return (
    <section className={isMobileMenu?"mobile-menu-container open":"mobile-menu-container "}>
        <main className="mobile-menu-wrapper  ">
        
          <ul className="list-links flex-col clean">
            {loggdingUser?
       
          
          <div className='user-img-container flex-jc-ac'  >
                   <span className='user-img'>{loggdingUser.fname[0].toUpperCase()}</span>

          </div>:
              <div className="login-signup-group">
              <li className="link-container flex-jc-ac"><span onClick={(event)=>handelNavigation(event,'login')} className="link">התחברות</span></li>
              <li className="link-container flex-jc-ac"><span onClick={(event)=>handelNavigation(event,'signup')} className="link">הרשמה</span></li>
            </div>
            }
            <div className="home-page-links">
            <li className="link-container flex-jc-ac" onClick={(event)=>handelClick(event,'courses')}><span className="link">הקורסים שלנו</span></li>
            <li className="link-container flex-jc-ac"   onClick={(event)=>handelClick(event,'who-are-we')}><span className="link">מי אנחנו</span></li>
            <li className="link-container flex-jc-ac"  onClick={(event)=>handelClick(event,'benefits')}><span className="link">יתרונות השיטה</span></li>
            <li className="link-container flex-jc-ac"  onClick={(event)=>handelClick(event,'tools')}><span className="link">כלים מעשיים</span></li>
            <li className="link-container flex-jc-ac"  onClick={(event)=>handelClick(event,'memorial')}><span className="link">לזיכרו של שלמה</span></li>

            </div>
             <div className="my-courses-group">
          {loggdingUser? 
          loggdingUser.courses.length ?
           <li className="link-container flex-jc-ac"><span onClick={(event)=>handelNavigation(event,'my-courses') }className="link">הקורסים שלי</span></li>
                        :''
                           :''
                      }
             </div>
        
       
          </ul>

        </main>

    </section>
  )
}

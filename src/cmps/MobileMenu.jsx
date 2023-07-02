import { Link } from "react-router-dom";

export default function MobileMenu({toggelMobileMenu,scrollToCourses,isMobileMenu}) {
 
 const handelClick = () => {
  toggelMobileMenu()
  scrollToCourses()
 }
  return (
    <section className={isMobileMenu?"mobile-menu-container open":"mobile-menu-container "}>
        <main className="mobile-menu-wrapper ">
        
          <ul className="list-links clean">
            <div className="login-signup-group">
            <li className="link-container flex-jc-ac"><span className="link">הרשמה</span></li>
            <li className="link-container flex-jc-ac"><span className="link">התחברות</span></li>

            </div>
            <div className="home-page-links">
            <li className="link-container flex-jc-ac" onClick={handelClick}><span className="link">הקורסים שלנו</span></li>
            <li className="link-container flex-jc-ac"><span className="link">מי אנחנו</span></li>
            <li className="link-container flex-jc-ac"><span className="link">יתרונות השיטה</span></li>
            <li className="link-container flex-jc-ac"><span className="link">כלים מעשיים</span></li>
            <li className="link-container flex-jc-ac"><span className="link">לזיכרו של שלמה</span></li>

            </div>
             <div className="my-courses-group">
            <li className="link-container flex-jc-ac"><span className="link">הקורסים שלי</span></li>

             </div>
        
       
          </ul>

        </main>

    </section>
  )
}

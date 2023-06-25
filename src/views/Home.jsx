import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { CoursesIndex } from '../cmps/CoursesIndex'
import { SwiperCarousel } from '../cmps/SwiperCarousel'
import { slides } from '../services/swiperService';
import { AppRecommendations } from '../cmps/AppRecommendations'
import { DoneSvg } from '../svgs/DoneSvg';

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const loggdingUser = useSelector((storeState) => storeState.userModule.loggdingUser)

  return (
    <section className='home-page-container grid'>
      <section className='carousel-container'>
        {loggdingUser ?
          <p className='home-greeting'>שלום: {loggdingUser.fullname ? loggdingUser.fullname : loggdingUser.fname}</p>
          : <div className='home-greeting'>שלום אורח</div>}
        {/* שילוב תמונות וציטוטים מספרים: 1-2 4-8 12 14 15 20 */}
        <SwiperCarousel slides={slides} />
      </section>
      <section className='content-container'>
        <section className='welcome-container flex-col'>
          <h2 className='headline'>  ברוכים הבאים למשפחת <span className='tc-b'>NLP</span> חיברים שמחים שבחרתם להתחבר אלינו</h2>
          <h3 className='sub-headline tc-b' >NLP Connection</h3>
          <h3 className='sub-headline tc-b'>Life transformation</h3>

        </section>

        <section className='memorial-container flex-col'>
          <div className='headline-container flex-col'>
            <h2 className='headline '>אתר זה מוקדש לעילוי נשמת יקירינו שלמה שושן ז"ל מנכ'ל ומייסד <span className='tc-b'>NLP</span> חיבורים </h2>
            <h2 className='headline'>1979-2020</h2>

          </div>
          <div className='shlomo-img-container'>
            <img className='shlomo-img' src='https://res.cloudinary.com/dii16awkb/image/upload/v1687447873/%D7%A9%D7%9C%D7%9E%D7%94_%D7%A9%D7%95%D7%A9%D7%9F_%D7%96%D7%9C_gwbovp.jpg' />
          </div>
        </section>
        <br />
        <section className='introduction-container'>
          <h2 className='headline'>אז מי אנחנו? ואיך לנו הצליחה הגישה?</h2>
          <p className='sub-title'>אתם בטח שואלים את עצמיכם מי אנחנו ? ומה בעצם אנחנו עושים ?
            תחילה נסביר מה זה בכלל <span className='tc-b'>NLP</span>, איך זה יכול להשפיע ולשדרג לך את החיים? מהסיבה שזה אינו טרנד חולף אלא דרך חיים ממש!
            גם אנחנו, דוגמה קלאסית לאיך שהשיטה הזאת פורצת דרך להצלחה ומשפרת ומיעלת את כל תחומי החיים ובכל המישורים
            רק בשנה האחרונה ראינו ועברנו אין סוף הצלחות ואבני דרך משמעותיות בעסק, ברווחים הכלכליים, בחינוך הילדים ובכלל ברמת התקשורת הבין
            אישית, מה שאיפשר לנו להמשיך ולעסוק במה שאנחנו אוהבים ומאמינים בו מתוך הרגשת שליחות, ביטוחון כלכלי ועסקי, אורח חיים בריא ומלא סיפוק.
            אז נכון להיום, גם בארץ, המודעות והעניין סביב נלפי גודל ומקבל מוודעות ותאוצה רבה .
            השיטה עצמה פותחה בשנות ה60-70 ע"י ריצארד בנדלר וג'ון גרינדר, וממשיכה להתפתח עד היום.</p>
        </section>
        <section className='who-are-we-container flex'>
          <div className="img-container">
            <h2 className='headline'>אז מי אנחנו?</h2>
            <img className='sharon-img' src='https://res.cloudinary.com/dii16awkb/image/upload/v1687447741/FB_IMG_1628962041057_utc48y.jpg' />
          </div>
          <p>שלום נעים מאוד אני שרון שושן , בת 42 מנכלית ומייסדת <span className='tc-b'>NLP</span> חיבורים . ביחד עם בעלי שלמה שושן עליו השלום הקמנו את העסק
            יותר מ10 שנים אני אמא לשלושה בנים מתוקים ועוסקת ביום יום בעיקר בתפקיד חיי שזה אומר להיות אמא. בנוסף בחקר קידום ופיתוח עולם תת המודע והנפש
            שלמה שושן זכרונו לברכה מנכל ומייסד של נלפי חיבורים נפטר ב2019 מהמחלה הנוראה היה אדם חכם להפליא עם יראת שמיים גדולה  הותיר אחריו שלושה ילדים וידע עצום ואדיר שהוא מעיין מקור חוכמה </p>
        </section>
        <section className='benefits  flex-col'>
          <h2 className='headline'>אז איך <span className='tc-b'>NLP</span> יכול לשדרג לך את החיים?</h2>
          <h3 className='sub-headline'>הנה כמה מהיתרונות </h3>
          <section className="list-warpper grid">
            <ul className='group1 flex-col clean'>
              <li className='flex-ac'><DoneSvg /> הבנה עמוקה יותר של המערת המדהימה הזאת שנקראת תת המודע . דבר שיש לכל אחד מאיתנו אך מעטים יודעים כיצד לפנות ולהשתמש בכלי הנפלא הזה! </li>
              <li className='flex-ac'><DoneSvg />שיפור משמעותי בתקשורת הבין אישית והבנת האחר</li>
              <li className='flex-ac'><DoneSvg />מודעות רחבה הרבה יותר למציאות שבה אנחנו חיים</li>
              <li className='flex-ac'><DoneSvg />מאפשר לך לחולל שינויים אמיתיים ומשמעותיים בחייך ובחיי הסובבים אותך בצורה קלה ופשוטה שמביאה לתוצאות מדהימות</li>
            </ul>

            <ul className='group2 flex-col clean'>
              <li className='flex-ac'><DoneSvg />יכולת ביטוי ושיכנוע ע"י תבניות שפה שיאפשרו לך כל מוצר ,כל מוצר, כל רעיון או כל דבר שתבחר. </li>
              <li className='flex-ac'><DoneSvg />ישדרג ויעצים את כל תחומי החיים שלך החל מבטחון עצמי, יכולת ביטוי, יצירת קשרים ,יכולת תפיסה,ושינויי העצמה ועד למצב שבו כל יעד שתבחר בדרך להצלחה שלך יהפוך לחוויה מעשירה ומעצימה</li>
              <li className='flex-ac'><DoneSvg />ועוד הרבה יותר מזה</li>
            </ul>

          </section>

        </section>

        <section className="what-tool-will-you-get-container">
          <h2 className='headline'>ללמוד איתנו ב<span className='tc-b'>NLP</span> חיבורים זה אומר ש...   </h2>
          <div className='tools-list-container flex'>
            <ul className='tools-list-warpper'>
            <li>תלמדו מה הוא נלפי על כל הגדרותיו באמת.</li>
            <li>תלמדו את מודל התקשורת, מודל שמתאר את החוויה האישית שאדם חווה, ברמה עמוקה ויסודית מאוד!</li>
            <li>תדע כיצד להגביר את החושים לתפיסת מציאות רחבה הרבה יותר!</li>
            <li>נראה כיצד ליצור כימיה - ראפור עוצמתית עם אנשים גם בשיטות המקובלות וגם בשיטה נוספת שאף אחד לא ילמד אותך!. </li>
            <li>אתה תדע כיצד לשלוט "סטייט" שלךברמה עוצמתית!</li>
            <li>תבין הייטב מה הם עוגנים וכיצד להשתמש בהם בדרך הטובה יותר עם כל אדם!</li>
            <li>תלמד מה היא השפה של המח וממה מורכבת מחשבה.</li>
            <li>נלמד כיצד ניתן לתכנת וליצור תהליכי שינוי עם המודע ותת המודע גם יחד.</li>
          </ul>
          <ul className='tools-list-warpper'>
          
            <li>תלמד תבניות שפה -מטורפות -לחולל שינויים ולהשיג שינויי תודעה ברמה עמוקה מאוד!</li>
            <li>נלמד מה הם אמונות מעצימות ומה הם אמונות מגבילות וכיצד ניתן לחשוף ולשנות אותם!</li>
            <li>אתה תקבל כלים משמעותיים לתהליכי שינוי , החל מאימון אישי להעצמה ולהגשמה בכל תחום, עד לטיפול בחרדות,דיכאונות,טראמות,התמכרויות,וכו'</li>
            <li>תדע טכניקות מדהימות להכניס לטראנס כל אדם .</li>
            <li>תדע כיצד להשתמש בשפה סוגסטיבית ליצירת שינוי בתת המודע.</li>
            <li>תקבל מגוון כלים עוצמתיים לעבודה עם ציר זמן ריגרסיה ,מסגור מחדש ועוד!</li>
            <li> תלמד מגווןטכניקות לתהליכי ניקוי ריגשי ותהליכי סליחה עוצמתיים מאוד!</li>
            <li>תוכל לעבוד מצויין עם מטאפורות ודימיון מודרך בדרכים יצירתיות ומגוונות.</li>
            </ul>
          </div>
            <p>ועוד מגוון כלים וידע על עבודת שינוי עם תת המודע (change work) </p>
          {/* בגדול וכחול */}
          <p className='summery tc-b'>זה הזמן להשקיע בעצמך בתחום שיעצים אותך בכל תחומי החיים!!</p>
        </section>
        <section className='what-best-for-you'>
          <h2>אז מה המסלול שהכי מתאים לך?</h2>

        </section>


      </section>
      <CoursesIndex />

      <h1 className='recommendations-title'>Students tell about us</h1>
      <AppRecommendations />
    </section>


  )
}

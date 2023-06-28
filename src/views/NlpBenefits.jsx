import React from 'react'
import { DoneSvg } from '../svgs/DoneSvg'

export  function NlpBenefits() {
  return (
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
  )
}

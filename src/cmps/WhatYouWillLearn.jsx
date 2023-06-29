import React from 'react'
import { DoneSvg } from '../svgs/DoneSvg';
export  function WhatYouWillLearn() {
  return (
    <section className='list-container flex-col'>
    <h3 className='headline'>מה תלמד בקורס?</h3>
      <section className="list-warpper flex">
<ul className='group1 flex clean'>
 <li className='flex-ac'><DoneSvg/> טיפול עומק בחמישה שלבים </li>
  <li className='flex-ac'><DoneSvg/>שיחה מקדימה ללקוח ולמטפל (pre-talk)</li>
  <li className='flex-ac'><DoneSvg/>Directe Suggestion  -הצעות ישירות לתת המודעה</li>
  <li className='flex-ac'><DoneSvg/>תהליכי סליחה לאחר  </li>
  <li className='flex-ac'><DoneSvg/>תלמד כיצד להכניס כל אדם לטראנס ולחולל שינויי עומק משעותיים בחייך ובחיי הסובבים אותך</li>
</ul>
    
<ul className='group2 flex clean'>
  <li className='flex-ac'><DoneSvg/>תהליכי סליחה עצמי </li>
  <li className='flex-ac'><DoneSvg/>דרגות/רמות טראנס</li>
  <li className='flex-ac'><DoneSvg/>ריגרסיה ועבודה עם ציר הזמן</li>
  <li className='flex-ac'><DoneSvg/>הדגמות של טראסים בזמן אמת</li>
  <li className='flex-ac'><DoneSvg/>חומרי עזר להורדה מערכי שיעור סקריפטים</li>
</ul>

      </section>

    </section>
  )
}

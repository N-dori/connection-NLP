import React from 'react'

  const WhoAreWe =React.forwardRef((props,ref) => {
return (
  <section ref={ref}  className='introduction-container flex-jc-ac'>
      <main className='introduction-wrapper flex-col'>
    <h2 className='headline'>אז מי אנחנו? ואיך לנו הצליחה הגישה?</h2>
    <p className='sub-title'>אתם בטח שואלים את עצמיכם מי אנחנו ? ומה בעצם אנחנו עושים ?
      תחילה נסביר מה זה בכלל <span className='tc-b'>NLP</span>, איך זה יכול להשפיע ולשדרג לך את החיים? מהסיבה שזה אינו טרנד חולף אלא דרך חיים ממש!
      גם אנחנו, דוגמה קלאסית לאיך שהשיטה הזאת פורצת דרך להצלחה ומשפרת ומיעלת את כל תחומי החיים ובכל המישורים
      רק בשנה האחרונה ראינו ועברנו אין סוף הצלחות ואבני דרך משמעותיות בעסק, ברווחים הכלכליים, בחינוך הילדים ובכלל ברמת התקשורת הבין
      אישית, מה שאיפשר לנו להמשיך ולעסוק במה שאנחנו אוהבים ומאמינים בו מתוך הרגשת שליחות, ביטוחון כלכלי ועסקי, אורח חיים בריא ומלא סיפוק.
      אז נכון להיום, גם בארץ, המודעות והעניין סביב <span className='tc-b'>NLP</span> גודל ומקבל מוודעות ותאוצה רבה .
      השיטה עצמה פותחה בשנות ה60-70 ע"י ריצארד בנדלר וג'ון גרינדר, וממשיכה להתפתח עד היום.</p>
      <section className='who-are-we-container '>
          <div className="img-container">
            {/* <h2 className='headline'>אז מי אנחנו?</h2> */}
            <img className='sharon-img' src='https://res.cloudinary.com/dii16awkb/image/upload/v1687447741/FB_IMG_1628962041057_utc48y.jpg' />
          </div>
          <p className='who-i-am'>שלום נעים מאוד אני שרון שושן , בת 42 מנכלית ומייסדת <span className='tc-b'>NLP</span>  חיבורים . ביחד עם בעלי שלמה שושן עליו השלום הקמנו את העסק
          כבר יותר מ10 שנים. אני אמא לשלושה בנים מתוקים ועוסקת ביום יום בעיקר בתפקיד חיי שזה אומר להיות אמא. בנוסף בחקר קידום ופיתוח עולם תת המודע והנפש.           שלמה שושן זכרונו לברכה מנכ'ל ומייסד של <span className='tc-b'>NLP</span> חיבורים נפטר ב2019 מהמחלה הנוראה היה אדם חכם להפליא עם יראת שמיים גדולה  הותיר אחריו שלושה ילדים וידע עצום ואדיר שהוא מעיין מקור חוכמה </p>
        </section>

      </main>
  </section>
  )
})
export default WhoAreWe
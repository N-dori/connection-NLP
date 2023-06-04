import React from 'react'
import { recommendations } from '../services/swiperService'

export  function AppRecommendations() {
  return (
    <section className='recommendations-container flex-jc'>
      <div className='qoution-mark'>"</div>
        {
            recommendations.map((recommendation)=>(
                <article>
            <div className='video-container'>
                <img className='recommendation-img' src={recommendation.image}/>
                <p className='student-review'>{recommendation.title}</p>
            </div>
            </article>

            ))

        }
       <div className='qoution-mark'>"</div>

    </section>
  )
}

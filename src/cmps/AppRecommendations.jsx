import React from 'react'
import { recommendations } from '../services/swiperService'
import ReactPlayer from 'react-player'
import { QouteSvg } from '../svgs/QouteSvg'

export function AppRecommendations() {
  return (
    <section className='recommendations-container flex-col '>
      <h2 className='recommendations-title'>הסטודנטים מספרים עליינו</h2>
        <section className='recommendations-wrapper flex-jc'>

      <div className='qoution-mark'><QouteSvg /></div>
      {
        recommendations.map((recommendation) => (
          <article key={recommendation.id}>
            <div className='video-container'>

              <ReactPlayer
                className="react-player"
                // url = "https://res.cloudinary.com/dii16awkb/image/upload/v1688901067/logo-footer_hcvgn9.jpg"
                light = {
                  <img src={recommendation.img}width="100%" height="100%" />
              }
                width="100%"
                height="100%"
                url={recommendation.videoUrl} controls />

              {/* <img className='recommendation-img' src={recommendation.image} /> */}
              <p className='student-name'>{recommendation.name}</p>
              <p className='student-review'>{recommendation.title}</p>
            </div>
          </article>
        ))

      }
        </section>
      {/* <div className='qoution-mark'><QouteSvg /></div> */}


    </section>
  )
}

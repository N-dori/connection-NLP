import React from 'react'
import { imgService } from '../services/imgService'

export function CourseReviews() {
  return (
    <section className="course-reviwes-container flex-col">
      <h1 className='headline'>Course reviews</h1>
      <section className='reviews-wrapper flex'>

        <article className='review-container flex-col'>
          <div className="reviewer-info flex-ac">
              <p className='reviewer-name'>sami ben haim</p>
            <div className='reviewer-img-container'>
              <img src={imgService.getImg('user')} alt="user" className="reviewer-img" />
            </div>
          </div>
          <div className='review-txt'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eos officiis consequuntur facere iusto, magnam suscipit nisi? Laudantium quisquam esse reiciendis enim ab reprehenderit. Praesentium ratione ad modi nihil architecto?</p>

          </div>
        </article>
        <article className='review-container flex-col'>
          <div className="reviewer-info flex-ac">
              <p className='reviewer-name'>sami ben haim</p>
            <div className='reviewer-img-container'>
              <img src={imgService.getImg('user')} alt="user" className="reviewer-img" />
            </div>
          </div>
          <div className='review-txt'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eos officiis consequuntur facere iusto, magnam suscipit nisi? Laudantium quisquam esse reiciendis enim ab reprehenderit. Praesentium ratione ad modi nihil architecto?</p>

          </div>
        </article>
        <article className='review-container flex-col'>

          <div className="reviewer-info flex-ac">
              <p className='reviewer-name'>sami ben haim</p>
            <div className='reviewer-img-container flex'>
              <img src={imgService.getImg('user')} alt="user" className="reviewer-img" />
            </div>
          </div>

          <div className='review-txt'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eos officiis consequuntur facere iusto, magnam suscipit nisi? Laudantium quisquam esse reiciendis enim ab reprehenderit. Praesentium ratione ad modi nihil architecto?</p>

          </div>
        </article>

        <article className='review-container flex-col'>
          <div className="reviewer-info flex-ac">
              <p className='reviewer-name'>sami ben haim</p>
            <div className='reviewer-img-container'>
              <img src={imgService.getImg('user')} alt="user" className="reviewer-img" />
            </div>
          </div>
          <div className='review-txt'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eos officiis consequuntur facere iusto, magnam suscipit nisi? Laudantium quisquam esse reiciendis enim ab reprehenderit. Praesentium ratione ad modi nihil architecto?</p>

          </div>
        </article>
      </section>

    </section>
  )
}

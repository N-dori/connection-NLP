import React from 'react'
import { Avatar } from '../svgs/Avatar'

export  function CourseInstructor() {
    return (
        <section className='course-instructor-wapper'>
        <h1 className='headline'>Instructor</h1>

        <h4 className='instructor-name'>Shlomo Shushan</h4>
        <h5 className='instructor-title'> NLP theraphist sepicialied in eapnosis</h5>

        <div className='instructor-info-container flex'>
            <div className='img-contaier'>
            <Avatar/>    
            </div>
        </div>
        <p className="instructor-bio">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat nostrum ducimus delectus eum illum unde hic consectetur, praesentium vitae nisi ea distinctio perferendis facilis velit consequatur quas culpa at!
            Vero dicta asperiores quasi architecto neque maxime, placeat rem odio quis pariatur tempora deserunt quia. Magni, tempore porro, neque quidem nam minus enim beatae tempora impedit repudiandae harum eius ipsa.
            Dolorem, reiciendis animi ad nesciunt illum quaerat voluptates neque nemo earum beatae ea laudantium doloribus, hic atque rerum illo sunt, eum expedita nisi. Et commodi suscipit, ratione aperiam atque ab!
            Provident aliquid iure, omnis perferendis dolore, sapiente magnam ducimus alias veniam deserunt eos culpa itaque error nemo natus corrupti cum fugit incidunt eius esse nisi dolorum commodi numquam reiciendis! Cumque.
            Minima quae accusantium saepe tempora! Natus aliquid minus reiciendis laudantium ut fugiat ea culpa deleniti, minima quia, aliquam facere, deserunt quis doloremque quidem porro aspernatur eos. Hic aliquid pariatur alias.
        </p>
    
    </section>
  )
}

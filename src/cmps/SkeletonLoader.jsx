import React from 'react'

export  function SkeletonLoader() {
  return (
    <section className='skelaton-container flex-jc-ac'>

    <div className="placeholder wave">
    <div className="line1"><br /></div>
    <div className="square"><br /></div>
    <div className="line2"><br /></div>

  </div>
  <div className="placeholder wave">
    <div className="line1"><br /></div>
    <div className="square"><br /></div>
    <div className="line2"><br /></div>
  </div>
  <div className="placeholder wave">
    <div className="line1"><br /></div>
    <div className="square"><br /></div>
    <div className="line2"><br /></div>
  </div>
  <div className="placeholder wave">
    <div className="line1"><br /></div>
    <div className="square"><br /></div>
    <div className="line2"><br /></div>
  </div>
  <div className="placeholder wave">
    <div className="line1"><br /></div>
    <div className="square"><br /></div>
    <div className="line2"><br /></div>
  </div>
    </section>
  )
}

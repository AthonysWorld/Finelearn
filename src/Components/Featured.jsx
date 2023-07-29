import React from 'react'
import image1 from '../image/futured-1.png'
import image2 from '../image/futured-2.png'
import image3 from '../image/futured-3.png'
import image4 from '../image/futured-4.png'

const Featured = () => {
  return (
    <div className='container-fluid row Featured'>
    <h1>Featured Competition</h1>
      <div className='container col-lg-3 col-5'>
<img className='headerImage' src={image1}></img>
      </div>

      <div className='container col-lg-3 col-5'>
      <img className='headerImage' src={image2}></img>
      </div>

      <div className='container col-lg-3 col-5'>
      <img className='headerImage' src={image3}></img>
      </div>

      <div className='container col-lg-3 col-5'>
      <img className='headerImage' src={image4}></img>
      </div>

    </div>
  )
}

export default Featured

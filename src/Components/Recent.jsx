import React from 'react'
import image1 from '../image/recent-1.png'
import image2 from '../image/recent2.png'
import image3 from '../image/recent3.png'
import image4 from '../image/recent4.png'

const Recent = () => {
  return (
    <div className='container-fluid recent'>
      <h1>Featured Competition</h1>
      <div className='container-fluid row'>
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
    </div>
  )
}

export default Recent

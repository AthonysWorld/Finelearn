import React from 'react'
import image1 from '../image/small1.png'
import image2 from '../image/small2.png'

const Reviews = () => {
  return (
    <div className='container-fluid row Reviews'>
      <div className='container col-lg-4'>
<h1>What our <span>Students</span> say about us</h1>
      </div>

      <div className='container reviews col-lg-4'>
      <img src={image1}></img>  <span>Anthony</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis </p>
      </div>

      <div className='container reviews col-lg-4'>
      <img src={image2}></img>
      <span>Adrian</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis </p>
      </div>


    </div>
  )
}

export default Reviews

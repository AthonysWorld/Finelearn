import React from 'react'
import image1 from '../image/explore-image-1.png'
import image2 from '../image/explore-image2.png'
import image3 from '../image/explore-image3.png'
import image4 from '../image/explore-image-4.png'
import image5 from '../image/explore-image5.png'
import image6 from '../image/explore-image6.png'

const Explore = () => {
  return (
    <div className='exploreDiv'>
      <h1>Explore our popular course</h1>

      <div className='container-fluid row'>
      <div className='container exploreImageDiv col-lg-4'>
<img className='exploreImage' src={image1}></img>
<h5>Learn Marketing from <br/> Top Instructors.</h5>
      </div>

      <div className='container exploreImageDiv col-lg-4'>
<img className='exploreImage' src={image2}></img>
<h5>Front-end development<br/> is not hard as you think</h5>
      </div>

      <div className='container exploreImageDiv col-lg-4'>
<img className='exploreImage' src={image3}></img>
<h5>Everrything you need to know in UX</h5>
      </div>

       <div className='container exploreImageDiv col-lg-4'>
<img className='exploreImage' src={image4}></img>
<h5>Learn photography with ease.</h5>
      </div>

      <div className='container exploreImageDiv col-lg-4'>
<img className='exploreImage' src={image5}></img>
<h5>Be a pro in data<br/> analysis</h5>
      </div>

      <div className='container exploreImageDiv col-lg-4'>
<img className='exploreImage' src={image6}></img>
<h5>Ethical Harking is not <br/> hard as you think </h5>
      </div>


      </div>
    </div>
  )
}

export default Explore

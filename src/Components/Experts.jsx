import React from 'react'
import Pic from '../image/glassedup.png'

const Experts = () => {
  return (
    <div className='expertDiv'>
      <div className='expert row'>
<div className='container online3 col-lg-6'>
<img className='pic' src={Pic}></img>
</div>

<div className='container online2 col-lg-6'>
<h1>We are <span>Experts</span><br/> Learning Institution</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Sit elit, bibendum volutpat platea mi, adipiscing eget magna. <br/>Eu nulla ut urna venenatis velit et tincidunt. Id vitae velit </p>
<button className='btn'>Enroll now</button>
</div>

      </div>
    </div>
  )
}

export default Experts

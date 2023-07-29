import React from 'react'
import logo from '../image/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
    <div className='container-fluid row'>
    <div className='container col-lg-6 bigContainer'>
<img src={logo}></img>
<p>We are not here to sell you<br/> products, we sell value through<br/> our expertise.</p>
      </div>
      <div className='container col-lg-3'>
<p>Address:</p>
<p>38 opebi Road, Ikeja,<br/> Lagos State, Nigeia</p>
<p>Phone:</p>
<p>+23400000000</p>
<p>Email:</p>
<p>contact@heyo.com</p>
      </div>
      <div className='container col-lg-3'>
<p>Company</p>
<p>About Us</p>
<p>Features</p>
<p>Pricing</p>
      </div>
    </div>
      <div className='footer-footer'>
      <hr/>
        <h5>Subscribe to get latest updates</h5>
        <input type='text' className='inputOne' placeholder='Your email address'></input><button className='btn'>Subscribe</button>
      </div>

    </div>
  )
}

export default Footer


import pic from '../image/increase.png'

const Online = () => {
  return (
    <div className='expertDiv'>
    <div className='onlineDiv container-fluid row'>
    <div className='container online col-lg-6'>
<h1>Our online<br/> <span>examination</span> is<br/> top-notch</h1>
<p>Prepare your self for greater challenges<br/> with our online examination.</p>
<button className='btn'>Take a test</button>
      </div>


      <div className='container col-lg-6'>
        <img className='pic'  src={pic}></img>
        </div>

    </div>
 
    </div>
  )
}

export default Online

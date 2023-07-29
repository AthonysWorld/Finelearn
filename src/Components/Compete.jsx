
import image1 from '../image/scholars-image.png'

const Compete = () => {
  return (
    <div className='Compete'>
     <h1>Compete with various scholars<br/> around the globe</h1> 

     <div className='container-fluid row form-one'>
<div className='container col-lg-6'>
<img className='pic'  src={image1}></img>
</div>

<div className='container form1 col-lg-6'>
<h5>Registration to get notified about new competition and article we publish.</h5>
    <form>
        <ul>
        <input type='text' placeholder='Full name'></input>
        </ul>
        <ul>
        <input type='email' placeholder='email'></input>
        </ul>
        <ul>
       <input type='number' placeholder='Phone number'></input>
        </ul>
        <ul>
       <input type='list' placeholder='list of courses'></input>
        </ul>

        <button className='btn'>Register</button>
    </form>
</div>



     </div>
    </div>
  )
}

export default Compete

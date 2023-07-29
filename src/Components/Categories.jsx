
import image1 from '../image/image-1.png'
import image2 from '../image/image-2.png'
import image3 from '../image/image-3.png'
import image4 from '../image/image-4.png'

const Categories = () => {
  return (
    <div className='container-fluid header-two'>
      <h2>Top cartegories</h2>
      <div className='container row'>
        <div className='container header-cont col-lg-2'>
        <img className='headerImage' src={image1}></img>
        </div>

        <div className='container header-cont col-lg-2'>
        <img className='headerImage' src={image2}></img>
        </div>

        <div className='container header-cont col-lg-2'>
        <img  className='headerImage' src={image3}></img> 
        </div>

        <div className='container header-cont col-lg-2'>
        <img className='headerImage' src={image4}></img> 
        </div>
      </div>
  
    </div>
  )
}

export default Categories


import image1 from '../image/publications-image.png'

const Publications = () => {
  return (
    <div className='Publications'>
    <div className='container-fluid row'>

    <div className='container PublicationOne col-lg-6'>
     <h1>Get <span>Publications</span> from the best Aurtors around the  Globe</h1>
     <p>Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra.  pharetra. Aliquam </p>
     <button className='btn'>Register</button>
      </div>

      <div className='conatiner PublicationOne col-lg-6'>
<img className='pic' src={image1}></img>
</div>

    </div>
    </div>
  )
}

export default Publications

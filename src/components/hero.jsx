import '../sass/hero.scss'
import HeroImg from '../../public/audio-store-assets/home/desktop/image-hero.jpg'
import NavBar from './navBar';

function Hero() {

  return (
    <>
      <div> 
        <NavBar/>
        <div className="content-container">
          <h3>New Product</h3>
          <h1>XX99 Mark II HEADPHONES</h1>
          <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>

        </div>
        <div className='hero-img--size'>
          <img src={HeroImg} alt="an image of Headphones" />
        </div>
      </div>
    
      
    </>
  )
}

export default Hero;

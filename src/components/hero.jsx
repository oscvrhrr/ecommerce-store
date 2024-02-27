import './hero.scss'
import HeroImg from '../starter-code/assets/home/desktop/image-hero.jpg'


function Hero() {

  return (
    <>
      <div> 
        <div className="content-container">
          <h3>New Product</h3>
          <h1>XX99 Mark II HEADPHONES</h1>
          <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <button>See Product</button>
        </div>
        <div className='hero-img--size'>
          <img src={HeroImg} alt="" />
        </div>
      </div>
    
      
    </>
  )
}

export default Hero;

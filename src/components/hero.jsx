import '../sass/hero.scss'
import '../sass/button.scss'
import HeroImg from '../../public/audio-store-assets/home/desktop/image-hero.jpg'
import NavBar from './navBar';
import Button from './button';
import { Link } from 'react-router-dom';

function Hero() {

  return (
    <>
      <div> 
        <NavBar className="nav-container" />
        <div className="content-container">
          <h3>New Product</h3>
          <h1>XX99 Mark II HEADPHONES</h1>
          <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <Link to='/product-details'>
            <Button
              buttonType='primary-button'
              label={"See Product"}
              />
          </Link>
        </div>
        <div className='hero-img--size'>
          <img src={HeroImg} alt="an image of Headphones" />
        </div>
      </div>
    
      
    </>
  )
}

export default Hero;

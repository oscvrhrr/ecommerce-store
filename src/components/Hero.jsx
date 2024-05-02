import '../sass/Hero.scss'
import '../sass/Button.scss'
import HeroImg from '../../public/audio-store-assets/home/desktop/image-hero.jpg'
import TabImg from '../../public/audio-store-assets/home/tablet/image-header.jpg'
import Navbar from './Navbar';
import Button from './Button';
import { Link } from 'react-router-dom';

function Hero() {

  return (
    <>
      <div className='hero'> 
        <Navbar className="nav-container" />
        <div className="content-container">
          <h3>New Product</h3>
          <h1>XX99 Mark II HEADPHONES</h1>
          <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <Link to='/product-details-mark-two'>
            <Button
              buttonType='primary-button'
              label={"See Product"}
              />
          </Link>
        </div>
        <div className='hero-img--size'>
          <img 
            srcSet={`${TabImg} 900w, ${HeroImg}`}
            src={HeroImg}
           alt="an image of Headphones" />
        </div>
      </div>
    
      
    </>
  )
}

export default Hero;

import '../sass/Hero.scss'
import '../sass/Button.scss'
import HeroImg from '../../public/audio-store-assets/home/desktop/image-hero.jpg'
import TabImg from '../../public/audio-store-assets/home/tablet/image-header.jpg'
import MobImg from '../../public/audio-store-assets/home/mobile/image-header.jpg'
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
            src={HeroImg}
            srcSet={`${MobImg} 750w, ${TabImg} 1536w, ${HeroImg} 2880w`}
            sizes='(max-width: 450px) 100vw, 750w'
            alt="an image of Headphones" />
            
        </div>
      </div>
    
      
    </>
  )
}

export default Hero;

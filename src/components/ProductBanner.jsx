import '../sass/ProductSection.scss'
import TabImg from '../../public/audio-store-assets/shared/tablet/image-best-gear.jpg'
import DesktopImg from '../../public/audio-store-assets/shared/desktop/image-best-gear.jpg'

function ProductBanner() {


    return (
        <>
            <div className="block-product-banner">
                <div className='block-product-banner--content'>
                    <h2>Bringing you the <span>best</span> audiogear</h2>
                    <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                </div>
                <img 
                    srcSet={`${TabImg} 900w, ${DesktopImg} `}
                    src={DesktopImg}
                    alt="" 
                 />
            </div>
        </>
    )
}

export default ProductBanner;
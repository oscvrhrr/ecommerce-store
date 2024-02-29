import Product from "./product";
import '../sass/product-section.scss'


function ProductSection() {
   const images = {
    headphones: '../../public/audio-store-assets/shared/desktop/image-category-thumbnail-headphones.png',
    speakers: '../../public/audio-store-assets/shared/desktop/image-category-thumbnail-speakers.png',
    earphones: '../../public/audio-store-assets/shared/desktop/image-category-thumbnail-earphones.png',
   }
   


    return (
        <>
            <section>
                <Product img={images.headphones} name="Headphones"/>
                <Product img={images.speakers} name="Speakers"/>
                <Product img={images.earphones} name="Earphones"/>
            </section>
        </>
    )
}

export default ProductSection
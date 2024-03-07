import Product from "./product";
import '../sass/product-section.scss'


function ProductSection() {
   const images = {
    headphones: '../../audio-store-assets/shared/desktop/image-category-thumbnail-headphones.png',
    speakers: '../../audio-store-assets/shared/desktop/image-category-thumbnail-speakers.png',
    earphones: '../../audio-store-assets/shared/desktop/image-category-thumbnail-earphones.png',
   }
   


    return (
        <>
            <section>
                <Product img={images.headphones} name="Headphones" path="/headphones"/>
                <Product img={images.speakers} name="Speakers" path="/speakers" />
                <Product img={images.earphones} name="Earphones" path="/earphones" />
            </section>
        </>
    )
}

export default ProductSection
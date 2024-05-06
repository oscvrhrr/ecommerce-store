
import Footer from "../components/Footer"
import Header from "../components/Header"
import ProductBanner from "../components/ProductBanner"
import ProductLinkLeft from "../components/ProductLinkLeft"
import ProductLinkRight from "../components/ProductLinkRight"
import ProductSection from "../components/ProductSection"

export default function HeadphonesPage() {
    return (
        <>
            <Header pageTitle="Headphones" />
            <ProductLinkLeft 
                mobImg='../../audio-store-assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg'
                tabImg='../../audio-store-assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg'
                img="../../audio-store-assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
                title="XX99 Mark II Headphones"
                desc="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound." 
                path="/product-details-mark-two"
            />
            <ProductLinkRight 
                mobImg='../../audio-store-assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg'
                tabImg='../../audio-store-assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg'
                img="../../audio-store-assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"
                title="XX99 Mark I Headphones"
                desc="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
                path="/product-details-mark-one"
            />
            <ProductLinkLeft  
                mobImg='../../audio-store-assets/product-xx59-headphones/mobile/image-category-page-preview.jpg'
                tabImg='../../audio-store-assets/product-xx59-headphones/tablet/image-category-page-preview.jpg'
                img="../../audio-store-assets/shared/desktop/image-xx59-headphones.jpg"
                title="XX59 Headphones"
                desc="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
                path="/product-details-xx59"
            />
            <ProductSection/>
            <ProductBanner/>
            <Footer/>
        </>
    )
}
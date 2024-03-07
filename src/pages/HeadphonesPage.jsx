
import Footer from "../components/footer"
import Header from "../components/header"
import ProductBanner from "../components/productBanner"
import ProductLinkLeft from "../components/productLinkLeft"
import ProductLinkRight from "../components/productLinkRight"
import ProductSection from "../components/productSection"

export default function HeadphonesPage() {
    return (
        <>
            <Header pageTitle="Headphones" />
            <ProductLinkLeft 
                img="../../audio-store-assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
                title="XX99 Mark II Headphones"
                desc="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound." 
                path="/product-details-mark-two"
            />
            <ProductLinkRight 
                img="../../audio-store-assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"
                title="XX99 Mark I Headphones"
                desc="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
                path="/product-details-mark-one"
            />
            <ProductLinkLeft  
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
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductBanner from "../components/ProductBanner";
import ProductSection from "../components/ProductSection";
import ProductLinkLeft from "../components/ProductLinkLeft";
import ProductLinkRight from "../components/ProductLinkRight";


export default function SpeakersPage() {
    return (
        <>
            <Header pageTitle="Speakers" />
            <ProductLinkLeft 
                tabImg='../../public/audio-store-assets/product-zx9-speaker/tablet/image-category-page-preview.jpg'
                img="../../audio-store-assets/product-zx9-speaker/desktop/image-category-page-preview.jpg"
                title="ZX9 SPEAKER"
                desc="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
                path="/product-zx9-speaker"
            />
            <ProductLinkRight 
                tabImg='../../public/audio-store-assets/product-zx7-speaker/tablet/image-category-page-preview.jpg'
                img="../../audio-store-assets/product-zx7-speaker/desktop/image-category-page-preview.jpg"
                title="ZX7 SPEAKER"
                desc="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
                path="/product-zx7-speaker"
            />
            <ProductSection/>
            <ProductBanner/>
            <Footer/>
        </>
    )
}
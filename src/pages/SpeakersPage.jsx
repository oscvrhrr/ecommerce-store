import Header from "../components/header";
import Footer from "../components/footer";
import ProductBanner from "../components/productBanner";
import ProductSection from "../components/productSection";
import ProductLinkLeft from "../components/productLinkLeft";
import ProductLinkRight from "../components/productLinkRight";


export default function SpeakersPage() {
    return (
        <>
            <Header pageTitle="Speakers" />
            <ProductLinkLeft 
                img="../../audio-store-assets/product-zx9-speaker/desktop/image-category-page-preview.jpg"
                title="ZX9 SPEAKER"
                desc="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
            />
            <ProductLinkRight 
                img="../../audio-store-assets/product-zx7-speaker/desktop/image-category-page-preview.jpg"
                title="ZX7 SPEAKER"
                desc="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
            />
            <ProductSection/>
            <ProductBanner/>
            <Footer/>
        </>
    )
}
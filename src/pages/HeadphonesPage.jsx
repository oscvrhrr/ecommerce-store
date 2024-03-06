
import Footer from "../components/footer"
import Header from "../components/header"
import ProductBanner from "../components/productBanner"
import ProductLinkLeft from "../components/productLinkLeft"
import ProductSection from "../components/productSection"

export default function HeadphonesPage() {
    return (
        <>
            <Header pageTitle="Headphones" />
            <ProductLinkLeft 
                img="../../audio-store-assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
                title="XX99 Mark II Headphones"
                desc="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound." />
            <ProductSection/>
            <ProductBanner/>
            <Footer/>
        </>
    )
}
import Header from "../components/Header";
import ProductBanner from "../components/ProductBanner";
import ProductSection from "../components/ProductSection";
import Footer from "../components/Footer";
import ProductLinkLeft from "../components/ProductLinkLeft";

export default function EarphonesPage() {
    return (
        <>
            <Header pageTitle="EarPhones" />
            <ProductLinkLeft
                img="../../audio-store-assets/product-yx1-earphones/desktop/image-category-page-preview.jpg"
                title="YX1 WIRELESS EARPHONES"
                desc="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
                path="/product-earphones"
             />
            <ProductSection/>
            <ProductBanner/>
            <Footer/>
        </>
    )
}
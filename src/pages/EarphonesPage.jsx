import Header from "../components/header";
import ProductBanner from "../components/productBanner";
import ProductSection from "../components/productSection";
import Footer from "../components/footer";
import ProductLinkLeft from "../components/productLinkLeft";

export default function EarphonesPage() {
    return (
        <>
            <Header pageTitle="EarPhones" />
            <ProductLinkLeft
                img="../../audio-store-assets/product-yx1-earphones/desktop/image-category-page-preview.jpg"
                title="YX1 WIRELESS EARPHONES"
                desc="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
             />
            <ProductSection/>
            <ProductBanner/>
            <Footer/>
        </>
    )
}
import NavBar from "../components/navBar"
import ProductDetails from "../components/productDetails"
import Features from "../components/features"
import ImageGrid from "../components/imageGrid"
import ProductSection from "../components/productSection"
import ProductBanner from "../components/productBanner"
import Footer from "../components/footer"


export default function EarphoneDetails() {
    return (
        <>
            <NavBar className="product-details-navbar" background="black" />
            <ProductDetails
                img="../../audio-store-assets/product-yx1-earphones/desktop/image-category-page-preview.jpg"
                title="YX1 Wireless Earphones"
                desc="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
                price="$ 599"
            />
            <Features 
                quantity="1"
                item={['Headphone Unit', 'Replacement Earcups', 'User Manual', '3.5mm 5m Audio Cable']}
                paraOne="Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound."
                paraTwo="The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black."
            />
            <ImageGrid 
                top="../../audio-store-assets/product-yx1-earphones/desktop/image-gallery-1.jpg"
                bottom="../../audio-store-assets/product-yx1-earphones/desktop/image-gallery-2.jpg"
                right="../../audio-store-assets/product-yx1-earphones/desktop/image-gallery-3.jpg"
            />
            <ProductSection />
            <ProductBanner />
            <Footer />
        </>
    )
}

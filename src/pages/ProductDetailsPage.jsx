
import Features from "../components/Features";
import Footer from "../components/Footer";
import ImageGrid from "../components/ImageGrid";
import Navbar from "../components/Navbar";
import ProductBanner from "../components/ProductBanner";
import ProductDetails from "../components/ProductDetails";
import ProductSection from "../components/ProductSection";


export default function ProductDetailsPage() {
    const MarkIIHeadphones = {
        id: 1,
        title: "XX99 Mark II Headphones",
        price: "$ 2,999",
        desc: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
        img: "../../audio-store-assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
    }

    return (
        <>
            <Navbar className="product-details-navbar" background="black" />
            <ProductDetails
                product={MarkIIHeadphones}
            />
            <Features 
                quantity="1"
                item={['Headphone Unit', 'Replacement Earcups', 'User Manual', '3.5mm 5m Audio Cable']}
                paraOne="Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound."
                paraTwo="The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black."

            />
            <ImageGrid 
                top="../../audio-store-assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg"
                bottom="../../audio-store-assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg"
                right="../../audio-store-assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"
            />
            <ProductSection />
            <ProductBanner />
            <Footer />
        </>
    )
}

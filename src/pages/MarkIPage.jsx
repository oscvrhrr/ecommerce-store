import NavBar from "../components/NavBar"
import ProductDetails from "../components/ProductDetails"
import Features from "../components/Features"
import ImageGrid from "../components/ImageGrid"
import ProductSection from "../components/ProductSection"
import ProductBanner from "../components/ProductBanner"
import Footer from "../components/Footer"


export default function MarkOnePage() {
    const MarkIHeadphones = {
        title: "XX99 Mark I Headphones",
        price: "$ 1,750",
        desc: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go. ",
        img: "../../audio-store-assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
    }

    return (
        <>
            <NavBar className="product-details-navbar" background="black" />
            <ProductDetails
                product={MarkIHeadphones}

            />
            <Features 
                quantity="1"
                item={['Headphone Unit', 'Replacement Earcups', 'User Manual', '3.5mm 5m Audio Cable']}
                paraOne="As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz."
                paraTwo="From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector."
            />
            <ImageGrid 
                top="../../audio-store-assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg"
                bottom="../../audio-store-assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg"
                right="../../audio-store-assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg"
            />
            <ProductSection />
            <ProductBanner />
            <Footer />
        </>
    )
}

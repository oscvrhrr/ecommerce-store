import Navbar from "../components/Navbar"
import ProductDetails from "../components/ProductDetails"
import Features from "../components/Features"
import ImageGrid from "../components/ImageGrid"
import ProductSection from "../components/ProductSection"
import ProductBanner from "../components/ProductBanner"
import Footer from "../components/Footer"



export default function ZX9Speaker() {
    const ZX9Speaker = {
        id: 4,
        title: "ZX9 Speaker",
        price: "$ 4,500",
        desc: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
        img: "../../audio-store-assets/product-zx9-speaker/desktop/image-category-page-preview.jpg"

    }

    return (
        <>
            <Navbar className="product-details-navbar" background="black" />
            <ProductDetails
                product={ZX9Speaker}

            />
            <Features 
                quantity="1"
                item={['Headphone Unit', 'Replacement Earcups', 'User Manual', '3.5mm 5m Audio Cable']}
                paraOne="Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m)."
                paraTwo="Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms."
            />
            <ImageGrid 
                top="../../audio-store-assets/product-zx9-speaker/desktop/image-gallery-1.jpg"
                bottom="../../audio-store-assets/product-zx9-speaker/desktop/image-gallery-2.jpg"
                right="../../audio-store-assets/product-zx9-speaker/desktop/image-gallery-3.jpg"
            />
            <ProductSection />
            <ProductBanner />
            <Footer />
        </>
    )
}
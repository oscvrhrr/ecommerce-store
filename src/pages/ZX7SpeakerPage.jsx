import NavBar from "../components/NavBar"
import ProductDetails from "../components/ProductDetails"
import Features from "../components/Features"
import ImageGrid from "../components/ImageGrid"
import ProductSection from "../components/ProductSection"
import ProductBanner from "../components/ProductBanner"
import Footer from "../components/Footer"


export default function ZX7Speaker() {
    const ZX7Speaker = {
        title: "ZX7 Speaker",
        price: "$ 3,500",
        desc: "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
        img: "../../audio-store-assets/product-zx7-speaker/desktop/image-category-page-preview.jpg"
    }

    return (
        <>
            <NavBar className="product-details-navbar" background="black" />
            <ProductDetails
                product={ZX7Speaker}


            />
            <Features 
                quantity="1"
                item={['Headphone Unit', 'Replacement Earcups', 'User Manual', '3.5mm 5m Audio Cable']}
                paraOne="Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage."
                paraTwo="The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience."
            />
            <ImageGrid 
                top="../../audio-store-assets/product-zx7-speaker/desktop/image-gallery-1.jpg"
                bottom="../../audio-store-assets/product-zx7-speaker/desktop/image-gallery-2.jpg"
                right="../../audio-store-assets/product-zx7-speaker/desktop/image-gallery-3.jpg"
            />
            <ProductSection />
            <ProductBanner />
            <Footer />
        </>
    )
}

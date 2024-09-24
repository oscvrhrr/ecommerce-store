import Navbar from "../components/Navbar"
import ProductDetails from "../components/ProductDetails"
import Features from "../components/Features"
import ImageGrid from "../components/ImageGrid"
import ProductSection from "../components/ProductSection"
import ProductBanner from "../components/ProductBanner"
import Footer from "../components/Footer"




export default function WhiteHeadphones() {
    const XX59Headphones = {
        id: 3,
        title: "XX59 Headphones",
        price: "$ 899",
        desc: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move. ",
        img: "../../audio-store-assets/product-xx59-headphones/desktop/image-category-page-preview.jpg"
    }


    return (
        <>
            <Navbar className="product-details-navbar" background="black" />
            <ProductDetails
                product={XX59Headphones}

            />
            <Features 
                quantity="1"
                item={['Headphone Unit', 'Replacement Earcups', 'User Manual', '3.5mm 5m Audio Cable']}
                paraOne="These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos."
                paraTwo="More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C."
            />
            <ImageGrid 
                top="../../audio-store-assets/product-xx59-headphones/desktop/image-gallery-1.jpg"
                bottom="../../audio-store-assets/product-xx59-headphones/desktop/image-gallery-2.jpg"
                right="../../audio-store-assets/product-xx59-headphones/desktop/image-gallery-3.jpg"
            />
            <ProductSection />
            <ProductBanner />
            <Footer />
        </>
    )
}

import NavBar from "../components/navBar";
import ProductDetails from "../components/productDetails";


export default function ProductDetailsPage() {
    return (
        <>
            <NavBar className="product-details-navbar" background="black" />
            <ProductDetails
                img="../../audio-store-assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
                title="XX99 Mark II Headphones"
                desc="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
                price="$ 2,999"
            />
        </>
    )
}
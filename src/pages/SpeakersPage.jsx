import Header from "../components/header";
import Footer from "../components/footer";
import ProductBanner from "../components/productBanner";
import ProductSection from "../components/productSection";


export default function SpeakersPage() {
    return (
        <>
            <Header pageTitle="Speakers" />
            <ProductSection/>
            <ProductBanner/>
            <Footer/>
        </>
    )
}
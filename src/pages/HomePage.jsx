import Earphone from "../components/EarPhone";
import SecondarySpeaker from "../components/SecondarySpeaker";
import Footer from "../components/footer";
import Hero from "../components/hero";
import MainSpeaker from "../components/mainSpeaker";
import ProductBanner from "../components/productBanner";
import ProductSection from "../components/productSection";

export default function HomePage() {
    return (
        <>
            <Hero/>
            <MainSpeaker/>
            <ProductSection/>
            <SecondarySpeaker/>
            <Earphone/>
            <ProductBanner/>
            <Footer/>
        </>
    )
}
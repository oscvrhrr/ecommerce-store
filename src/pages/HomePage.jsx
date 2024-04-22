import Earphone from "../components/EarPhone";
import SecondarySpeaker from "../components/SecondarySpeaker";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MainSpeaker from "../components/MainSpeaker";
import ProductBanner from "../components/ProductBanner";
import ProductSection from "../components/ProductSection";

export default function HomePage() {
    return (
        <>
            <Hero/>
            <ProductSection/>
            <MainSpeaker/>
            <SecondarySpeaker/>
            <Earphone/>
            <ProductBanner/>
            <Footer/>
        </>
    )
}
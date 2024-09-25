import Navbar from "../components/Navbar"
import { CheckoutForm } from "../components/CheckoutForm"
import Footer from "../components/Footer"




export const CheckoutPage = () => {

    return (
        <div className="pg-body--white">
            <Navbar className="product-details-navbar" background="black" />
            <CheckoutForm/>
            <Footer/>
        </div>
    
    
    )
}
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage'
import HeadphonesPage from './pages/HeadphonesPage'
import SpeakersPage from './pages/SpeakersPage'
import EarphonesPage from './pages/EarphonesPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import MarkOnePage from './pages/MarkIPage'
import WhiteHeadphones from './pages/WhiteHeadphonesPage'
import ZX9Speaker from './pages/ZX9SpeakerPage'
import ZX7Speaker from './pages/ZX7SpeakerPage'
import EarphoneDetails from './pages/EarphonesDetailsPage'
import { CheckoutPage } from "./pages/CheckoutPage";
import { PuffLoader } from "react-spinners";
import { useState, useEffect } from "react";


import './sass/Index.scss'



function App() {
    const [loading, setLoading] = useState('false')

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1150)
    }, [])
    


    return (  
       <>
       {

        loading?
        
            <PuffLoader
            color="#D87D4A"
            size={100}
            style={{position: "fixed", top: "40%", left: "46%", transform: "translate(-50%, -50%)"}}
    
            />


        :




           <Routes>
               <Route path="/" element={<HomePage/>}></Route>
               <Route path="/headphones" element={<HeadphonesPage/>}></Route>
               <Route path="/speakers" element={<SpeakersPage/>}></Route>
               <Route path="/earphones" element={<EarphonesPage/>}></Route>
               <Route path="product-details-mark-two" element={<ProductDetailsPage/>}></Route>
               <Route path="/product-details-mark-one" element={<MarkOnePage/>}></Route>
               <Route path="/product-details-xx59" element={<WhiteHeadphones/>}></Route>
               <Route path="/product-zx9-speaker" element={<ZX9Speaker/>}></Route>
               <Route path="/product-zx7-speaker" element={<ZX7Speaker/>}></Route>
               <Route path="/product-earphones" element={<EarphoneDetails/>}></Route>
               <Route path="/checkout" element={<CheckoutPage/>}></Route>
           </Routes>
          
           
       }
       
       </>

        
    
    )
}


export default App;
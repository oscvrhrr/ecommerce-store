import Button from "./Button"
import '../sass/ProductSection.scss'
import '../sass/Button.scss'
import { Link } from "react-router-dom"

function SecondarySpeaker() {
    return (
        <>
            <div className="secondary-speaker-component">
                <div className="secondary-speaker-component-container">
                    <h4>ZX7 Speaker</h4>
                    <Link to="/product-zx7-speaker" >
                        <Button 
                        buttonType='transparent-button'
                        label='See Product'/>
                    </Link>

                </div>
                
            </div>

        </>


    )
}


export default SecondarySpeaker
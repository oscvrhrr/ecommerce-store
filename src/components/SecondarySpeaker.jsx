import Button from "./button"
import '../sass/product-section.scss'
import '../sass/button.scss'

function SecondarySpeaker() {
    return (
        <>
            <div className="secondary-speaker-component">
                <div className="secondary-speaker-component-container">
                    <h4>ZX7 Speaker</h4>
                    <Button 
                    buttonType='transparent-button'
                    label='See Product'/>

                </div>
                
            </div>

        </>


    )
}


export default SecondarySpeaker
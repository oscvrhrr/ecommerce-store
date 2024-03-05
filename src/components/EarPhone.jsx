import Button from "./button"
import '../sass/product-section.scss'
import '../sass/button.scss'


function Earphone() {
return (
    <>
        <article className="block-earphone">
            <div className="earphone-img">

            </div>
            <div className="block-content">
                <h4>YX1 Earphones</h4>
                <Button label='See Product' buttonType='transparent-button'
                />
            </div>
        </article>
    </>
)
}

export default Earphone;
import Button from "./button"
import { Link } from "react-router-dom"
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
                <Link to="/product-earphones" >
                    <Button label='See Product' buttonType='transparent-button'
                    />
                </Link>
            </div>
        </article>
    </>
)
}

export default Earphone;
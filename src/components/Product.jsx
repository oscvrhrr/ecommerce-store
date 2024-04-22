/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import '../sass/ProductSection.scss'

function Product({name,img,path}) {
    const arrow = '../../audio-store-assets/shared/desktop/icon-arrow-right.svg'
    return (
        <div className="container-product">
            <div className="product">
                <img src={img} alt="an image of the product" />
                <h6>{name}</h6>
                <Link to={path} >
                    <p>Shop
                        <img src={arrow}/>
                    </p>
                </Link>
            </div>
        </div>

    )
}


export default Product
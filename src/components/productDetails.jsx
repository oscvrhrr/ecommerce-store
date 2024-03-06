/* eslint-disable react/prop-types */
import '../sass/product-details.scss'
import Button from './button'
import QuantityField from './quantityField';




function ProductDetails({img,title,desc,price}) {
    return (
        <>
            <div className='component-product-details'>
                <img src={img} alt="" />
                <div className='component-product-details-container'>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                    <p>{price}</p>
                    <div className='component-product-details--actions'>
                        <QuantityField />
                        <Button buttonType="primary-button" label="Add TO Cart" />
                    </div>
                </div>
            </div>
        </>
    )
}



export default ProductDetails;
/* eslint-disable react/prop-types */
import '../sass/product-details.scss'
import Button from './button';
import QuantityField from './quantityField';
import { useContext } from 'react';
import { ProductContext } from './context/CartContext';




function ProductDetails({product}) {
    const value = useContext(ProductContext)
    const { addToCart } = value;


    const {img,title,desc,price} = product;

   


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
                        <Button label="Add To Cart" onClick={() => addToCart(product)} />
                    </div>
                </div>
            </div>
        </>
    )
}



export default ProductDetails;
/* eslint-disable react/prop-types */
import '../sass/ProductDetails.scss'
import Button from './Button';
import QuantityField from './QuantityField';
import { useContext } from 'react';
import { GlobalContext } from './context/GlobalContext';





function ProductDetails({product}) {
    const { dispatch } = useContext(GlobalContext)
    const { id,img,title,desc,price } = product;

    const handleAddToCart = () => {
        dispatch({ type: "ADD_ITEM", payload:{ id } })
    }
    


    return (
        <>
            <div className='component-product-details'>
                <img 
                src={img} 
                alt=""
                />
                <div className='component-product-details-container'>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                    <p>{price}</p>
                    <div className='component-product-details--actions'>
                        <QuantityField />
                        <Button label="Add To Cart" onClick={handleAddToCart} />
                    </div>
                </div>
            </div>
        </>
    )
}



export default ProductDetails;
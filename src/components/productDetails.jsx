/* eslint-disable react/prop-types */
import '../sass/product-details.scss'
import Button from './button';
import QuantityField from './quantityField';
import CartReducer from "./reducer/CartReducer";
import { cartInitState } from "./reducer/CartInitState";
import { useReducer } from "react";


function ProductDetails({img,title,desc,price}) {
    const [ state, dispatch ] = useReducer(CartReducer, cartInitState)


   const addToCart = (e) => {
    e.preventDefault();
    const productToAdd = cartInitState.products.find(product => product.name === title);
    console.log(productToAdd)
    if (productToAdd) {
        dispatch({ type: 'add_item', payload: {img: img, title: title, price: price} });
    }
    console.log(state)
   }



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
                        <Button onClick={addToCart} />
                    </div>
                </div>
            </div>
        </>
    )
}



export default ProductDetails;
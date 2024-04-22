/* eslint-disable react/prop-types */
import '../sass/ProductDetails.scss'
import Button from './Button';
import QuantityField from './QuantityField';
import { useContext } from 'react';
import { ProductContext } from './context/CartContext';




function ProductDetails({product}) {
    const value = useContext(ProductContext)
    const { addToCart } = value;
    const [quantity, setQuantity] = useState(0)


    const {img,title,desc,price} = product;

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
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
                        <QuantityField onQuantityChange={handleQuantityChange}/>
                        <Button label="Add To Cart" onClick={() => addToCart(product)} />
                    </div>
                </div>
            </div>
        </>
    )
}



export default ProductDetails;
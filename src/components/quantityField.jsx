/* eslint-disable react/prop-types */
import "../sass/product-details.scss";
import { useState } from "react";

function QuantityField({onQuantityChange}) {
  const [quantity, setQuantity] = useState(0);

  const decrementQuantity = () => {
    const newQuantity = 0
    setQuantity((prevQuantity) => prevQuantity - 1);
    onQuantityChange(newQuantity);
  };

  const increaseQuantity = () => {
    const newQuantity =
    setQuantity((prevQuantity) => prevQuantity + 1);
    onQuantityChange(newQuantity);
  };
  
 

  return (
    <>
      <div className="component-quantity-field">
        <button onClick={decrementQuantity}>-</button>
        <p>{quantity}</p>
        <button onClick={increaseQuantity}>+</button>
      </div>
    </>
  );
}

export default QuantityField;

import "../sass/ProductDetails.scss";
import { useState } from "react";

function QuantityField() {
  const [quantity, setQuantity] = useState(0);
  const decrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
    if (quantity === 0) {
      setQuantity(0);
    }
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
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

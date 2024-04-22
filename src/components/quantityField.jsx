/* eslint-disable react/prop-types */
import "../sass/ProductDetails.scss";


function QuantityField({handleDecrease, handleIncrease, quantity}) {
  
  
 

  return (
    <>
      <div className="component-quantity-field">
        <button onClick={handleDecrease}>-</button>
        <p>{quantity}</p>
        <button onClick={handleIncrease}>+</button>
      </div>
    </>
  );
}

export default QuantityField;

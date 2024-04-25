/* eslint-disable react/prop-types */
import "../sass/ProductDetails.scss";


function QuantityField({onHandleDecrease, onHandleIncrease, quantity}) {
  
  
 

  return (
    <>
      <div className="component-quantity-field">
        <button onClick={onHandleDecrease}>-</button>
        <p>{quantity}</p>
        <button onClick={onHandleIncrease}>+</button>
      </div>
    </>
  );
}

export default QuantityField;

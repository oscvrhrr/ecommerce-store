/* eslint-disable react/prop-types */
import "../sass/ProductDetails.scss";


function QuantityField({ quantity}) {
  
  
 

  return (
    <>
      <div className="component-quantity-field">
        <button>-</button>
        <p>{quantity}</p>
        <button>+</button>
      </div>
    </>
  );
}

export default QuantityField;

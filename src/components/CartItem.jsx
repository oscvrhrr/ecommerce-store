/* eslint-disable react/prop-types */

import "../sass/CartItem.scss";
import QuantityField from "./QuantityField";


export function CartItem({ item }) {
  



  return (
    <li className="component-cart-item">
      <img src={item.path} alt="image of product" />
      <div className="component-cart-item-info">
        <p className="grey-font">{item.price}</p>
        <p>{item.name}</p>
      </div>
      <QuantityField quantity={item.quantity}/>
    </li>
  );
}

export default CartItem;

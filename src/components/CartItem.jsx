/* eslint-disable react/prop-types */

import { useContext } from "react";
import "../sass/CartItem.scss";
import QuantityField from "./QuantityField";
import { ProductContext } from "./context/CartContext";

export function CartItem({ item }) {
  const value = useContext(ProductContext);
  const { handleDecrease, handleIncrease } = value;

  return (
    <li className="component-cart-item">
      <img src={item.img} alt="image of product" />
      <div className="component-cart-item-info">
        <p className="grey-font">{item.price}</p>
        <p>{item.title}</p>
      </div>
      <QuantityField
        onHandleDecrease={() => handleDecrease(item.title)}
        onHandleIncrease={() => handleIncrease(item.title)}
        quantity={item.quantity}
      />
    </li>
  );
}

export default CartItem;

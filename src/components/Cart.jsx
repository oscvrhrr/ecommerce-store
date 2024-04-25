/* eslint-disable react/prop-types */
import "../sass/Navbar.scss";
import Button from "./Button";
// import CartItem from "./cartItem";
import { useContext } from "react";
import { ProductContext } from "./context/CartContext";
import CartItem from "./CartItem";

function Cart() {
  const value  = useContext(ProductContext);
  
  const { removeFromCart, total } = value;

 

  return (
    <>
      <aside className="component-cart">
        <div className="cart-header">
          <h6>Cart ({value.cart.length})</h6>
          <p className="cursor" onClick={() => removeFromCart()}>Remove all</p>
        </div>
        <ul className="scroll-list">
          {value.cart.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </ul>
        <div className="total">
          <p>TOTAL</p>
          <h6>{total}</h6>
        </div>
        <Button buttonType="checkout-button" label="CHECKOUT"  />
      </aside>
    </>
  );
}

export default Cart;

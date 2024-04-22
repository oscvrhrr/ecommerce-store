/* eslint-disable react/prop-types */
import "../sass/Navbar.scss";
import Button from "./Button";
// import CartItem from "./cartItem";
import { useContext } from "react";
import { ProductContext } from "./context/CartContext";
import CartItem from "./CartItem";

function Cart() {
  const value  = useContext(ProductContext);

  




  




  return (
    <>
      <aside className="component-cart">
        <div className="cart-header">
          <h6>Cart {value.cart.length}</h6>
          <p>Remove all</p>
        </div>
        <ul>
          {value.cart.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </ul>
        <div>
          <p></p>
          <h6></h6>
        </div>
        <Button buttonType="checkout-button" label="CHECKOUT"  />
      </aside>
    </>
  );
}

export default Cart;

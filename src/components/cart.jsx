/* eslint-disable react/prop-types */
import "../sass/navbar.scss";
import Button from "./button";
import CartItem from "./cartItem";
import { useContext } from "react";
import { ProductContext } from "./context/CartContext";


function Cart() {
  const { state } = useContext( ProductContext );
  const cart = state.cart;



  return (
    <>
      <aside className="component-cart">
        <div className="cart-header">
          <h6>Cart</h6>
          <p>Remove all</p>
        </div>
        <ul>
          {cart.map( product => (
            <CartItem key={product.index} name={product.name} img={product.img} price={product.price}  />
          ))}
        </ul>
        <div>
          <p></p>
          <h6></h6>
        </div>
        <Button buttonType="checkout-button" label="CHECKOUT" />
      </aside>
    </>
  );
}

export default Cart;

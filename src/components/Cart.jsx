/* eslint-disable react/prop-types */
import "../sass/Navbar.scss";
import Button from "./Button";
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function Cart() {
  const { state, dispatch } = useContext(GlobalContext)
  
  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART"})
  }


 

  return (
    <>
      <aside className="component-cart">
        <div className="cart-header">
          <h6>Cart </h6>
          <p className="cursor" onClick={handleClearCart}>Remove all</p>
        </div>
        <ul className="scroll-list">
         {
           state.cart.map((item, index) => (
            <CartItem key={index} item={item}/>
           ))
         }
          
        </ul>
        <div className="total">
          <p>TOTAL</p>
          <h6>{state.totalCost}</h6>
        </div>
        <Link to={"/checkout"}>
          <Button buttonType="checkout-button" label="CHECKOUT"  />
        </Link>
      </aside>
    </>
  );
}

export default Cart;

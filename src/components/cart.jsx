import '../sass/navbar.scss'
import Button from "./button";



function Cart () {


return (
    <>
        <aside className="component-cart">
            <div className='cart-header'>
                <h6>Cart</h6>
                <p>Remove all</p>
            </div>
            <ul>
                
            </ul>
            <div>
                <p>Total</p>
                <h6></h6>
            </div>
            <Button 
            buttonType="checkout-button"
            label="CHECKOUT"
                />
        </aside>
    </>
 )

}


export default Cart;
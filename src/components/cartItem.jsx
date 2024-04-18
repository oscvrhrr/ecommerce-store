/* eslint-disable react/prop-types */

import '../sass/cart-item.scss'
import QuantityField from './quantityField';


export function CartItem({item}) {



  return (
    <li className="component-cart-item">
      <img  src={item.img} alt="image of product"/>
      <div className="component-cart-item-info">
        <p>{item.price}</p>
        <p>{item.title}</p>
      </div>
      <QuantityField/>
    </li>
  );
}

export default CartItem;

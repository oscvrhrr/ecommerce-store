/* eslint-disable react/prop-types */
import QuantityField from "./quantityField";



export function CartItem({name, img, price}) {



  return (
    <li>
      <img  src={img} alt="image of product"/>
      <div>
        <p>{price}</p>
        <p>{name}</p>
      </div>
      <QuantityField />
    </li>
  );
}

export default CartItem;

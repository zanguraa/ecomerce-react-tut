import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const CartItem = (props) => {
  const { id, name, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCart } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} alt={name} />
      <div className="description">
        <p>{name}</p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCart(id, Number(e.target.value))}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

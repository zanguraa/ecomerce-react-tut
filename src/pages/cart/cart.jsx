import React from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import "./cart.css";
import CartItem from "./cart-item";

const Cart = () => {
  const { cartItems } = React.useContext(ShopContext);

  return (
    <div className="cart">
      <div>
        <h1>YOur cart items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product, index) => {
          if (cartItems[product.id]) {
            return <CartItem key={index} data={product} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Cart;

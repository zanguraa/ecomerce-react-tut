import React from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import "./cart.css";
import CartItem from "./cart-item";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalItems } = React.useContext(ShopContext);
  const totalAmount = getTotalItems(cartItems);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your cart items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product, index) => {
          if (cartItems[product.id]) {
            return <CartItem key={index} data={product} />;
          }
          return null;
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;

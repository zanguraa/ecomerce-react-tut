import React from "react";
import { ShopContext } from "../../context/shop-context";

const Product = (props) => {
  const { id, name, price, productImage } = props.data;
  const { addToCart, cartItems } = React.useContext(ShopContext);

  return (
    <div className="product">
      <img src={productImage} alt={name} />
      <div className="description">
        <p>{name}</p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add to Cart {cartItems[id] ? `(${cartItems[id]})` : null}
      </button>
    </div>
  );
};

export default Product;

import React from "react";

const cartItem = (props) => {
  const { id, name, price, productImage } = props.data;
  return (
    <div className="cartItem">
      <img src={productImage} alt={name} />
      <div className="description">
        <p>{name}</p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default cartItem;

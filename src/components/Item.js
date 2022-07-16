import React, { useState } from 'react';

function Item({ name, category }) {

  const [isInCart, setCart] = useState(false)

  function addToCart() {
    setCart((isInCart) => !isInCart)
  }

  return (
    <li className={isInCart ? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "remove":"add"} onClick={addToCart}>{isInCart ? "Remove From":"Add to"} Cart</button>
    </li>
  );
}

export default Item;

import React, { useState } from "react";

function PlantCard({ plant }) {
  const { id, name, image, price } = plant
  const [inStock, setInStock] = useState(true)

  function handleClick() {
    setInStock((inStock) => !inStock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price.toFixed(2)}</p>
      {inStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;

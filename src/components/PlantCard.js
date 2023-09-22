import React, { useState } from "react";

function PlantCard({ plant, onUpdatePlant }) {
  const { id, name, image, price } = plant
  const [inStock, setInStock] = useState(true)
  const [updatedPrice, setUpdatedPrice] = useState(0)

  function handleClick() {
    setInStock((inStock) => !inStock)
  }

  function handlePriceChange(e) {
    const amount = e.target.value
    if (amount === "" || amount === null || amount < 0) {
      setUpdatedPrice("")
    } else {
      setUpdatedPrice(parseFloat(e.target.value))
    }
  }

  function handleSubmit(e) {
    e.preventDefault()

    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ price: updatedPrice })
    }

    fetch(`http://localhost:6001/plants/${id}`, configObj)
      .then(r => r.json())
      .then((updatedPlant) => onUpdatePlant(updatedPlant))

    setUpdatedPrice(0)
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
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          step="0.01"
          placeholder="New Price..."
          value={updatedPrice}
          onChange={handlePriceChange}
        />
        <button type="submit">Update Price</button>
      </form>
    </li>
  );
}

export default PlantCard;

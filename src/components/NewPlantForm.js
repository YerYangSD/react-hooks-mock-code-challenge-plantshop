import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0,
  })

  function handleChange(event) {
    if (event.target.name === "price") {
      const amount = event.target.value
      if (amount === "" || amount === null || amount < 0) {
        setFormData({ ...formData, [event.target.name]: "" })
      } else {
        setFormData({
          ...formData,
          [event.target.name]: parseFloat(event.target.value),
        })
      }
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value })
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }

    fetch("http://localhost:6001/plants", configObj)
      .then(r => r.json())
      .then(plant => onAddPlant(plant))

    setFormData({
      name: "",
      image: "",
      price: 0,
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} placeholder="Plant name" onChange={handleChange} />
        <input type="text" name="image" value={formData.image} placeholder="Image URL" onChange={handleChange} />
        <input type="number" name="price" value={formData.price} step="0.01" placeholder="Price" onChange={handleChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

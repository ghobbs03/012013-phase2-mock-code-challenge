import React from "react";
import { useState } from "react";

function NewPlantForm({handleNewPlant}) {
  const [newPlantName, setNewPlantName] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newPrice, setNewPrice] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newPlant = {name: newPlantName, image: newImage, price: parseFloat(newPrice)}

    handleNewPlant(newPlant);

    }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={newPlantName} onChange={(event) => setNewPlantName(event.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" value={newImage} onChange={(event) => setNewImage(event.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price"  value={newPrice} onChange={(event) => setNewPrice(event.target.value)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

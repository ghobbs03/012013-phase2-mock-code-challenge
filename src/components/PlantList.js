import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, inStockArray, handleOutOfStock}) {
  const plantElements = plants.map((plant, index) => {
    return <PlantCard key={index} name={plant.name} image={plant.image} price={plant.price} index={index} handleOutOfStock={handleOutOfStock} isInStock={inStockArray[index]}/>
  })
  return (
    <ul className="cards">{plantElements}</ul>
  );
}

export default PlantList;

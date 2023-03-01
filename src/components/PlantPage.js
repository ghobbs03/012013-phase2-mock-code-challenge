import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, handleNewPlant, inStockArray, handleOutOfStock, handleSearch}) {
  return (
    <main>
      <NewPlantForm handleNewPlant={handleNewPlant}/>
      <Search handleSearch={handleSearch}/>
      <PlantList plants={plants} handleOutOfStock={handleOutOfStock} inStockArray={inStockArray}/>
    </main>
  );
}

export default PlantPage;

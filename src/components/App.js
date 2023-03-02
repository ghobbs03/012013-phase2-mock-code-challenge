import React, { useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { useState } from "react";

const plantAPI = "http://localhost:6001/plants"

function App() {
  const [plants, setPlants] = useState([]);
  const [inStockArray, setInStockArray] = useState([]);
  const [initialPlantState, setInitialState] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(plantAPI)
    .then((resp) => resp.json())
    .then((plantArray) => {
      setPlants(plantArray);
      setInitialState(plantArray);
      setInStockArray(Array(plantArray.length).fill(true));
    })

  },[])



  function handleNewPlant(newPlant) {
    const addNewPlant = () => {
      fetch(plantAPI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPlant),
      }).then(resp => resp.json())
      .then((plant) => {
        setPlants([...plants, plant]);
        setInitialState([...plants, plant]);
        setInStockArray([...inStockArray, true]);
      })
    }

    addNewPlant();

    //setPlants([...plants, newPlant])
    //setInitialState([...plants, newPlant])
    //setInStockArray([...inStockArray, true]);


  }


  function handleOutOfStock(index) {
    const inStockArrayCopy = [...inStockArray];
    const isPlantInStock = inStockArray[index];
    
    if (isPlantInStock) {
      inStockArrayCopy[index] = false;
    }
    setInStockArray(inStockArrayCopy);
  }

  function handleSearch(event) {
    const name = event.target.value;
    setSearchTerm(name);
  }


  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants.filter((plant) => (plant.name.toLowerCase().includes(searchTerm.toLowerCase())))} handleNewPlant={handleNewPlant} inStockArray={inStockArray} handleOutOfStock={handleOutOfStock} handleSearch={handleSearch}/>
    </div>
  );
}

export default App;

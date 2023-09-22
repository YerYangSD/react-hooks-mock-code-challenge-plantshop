import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onUpdatePlant }) {

  const plantList = plants.map((plant) => <PlantCard key={plant.id} plant={plant} onUpdatePlant={onUpdatePlant} />)

  return (
    <ul className="cards">{plantList}</ul>
  );
}

export default PlantList;

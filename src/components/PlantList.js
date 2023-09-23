import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onUpdatePlant, onDeletePlant }) {

  const plantList = plants.map((plant) => (
    <PlantCard
      key={plant.id}
      plant={plant}
      onUpdatePlant={onUpdatePlant}
      onDeletePlant={onDeletePlant}
    />
  ))

  return (
    <ul className="cards">{plantList}</ul>
  );
}

export default PlantList;

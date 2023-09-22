import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {

  const plantList = plants.map((plant) => <PlantCard key={plant.id} plant={plant} />)

  return (
    <ul className="cards">{plantList}</ul>
  );
}

export default PlantList;

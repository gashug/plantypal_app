import React from 'react';
import { useSelector } from 'react-redux';

const VegetableDetails = () => {
  const selectedVegetable = useSelector((state) => state.vegetables.selectedVegetable);

  if (!selectedVegetable) {
    return <div>No vegetable selected.</div>;
  }

  return (
    <div>
      <h2>{selectedVegetable.name}</h2>
      <p>Type: {selectedVegetable.type}</p>
      <p>Planting Requirements: {selectedVegetable.plantingRequirements}</p>
      <p>Companion Plants: {selectedVegetable.companionPlants.join(', ')}</p>
    </div>
  );
};

export default VegetableDetails;

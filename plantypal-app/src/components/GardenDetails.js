// src/components/GardenDetails.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGardenDetails } from '../redux/actions/gardenActions';

const GardenDetails = ({ selectedGarden, fetchGardenDetails }) => {
  useEffect(() => {
    fetchGardenDetails(); // Dispatch action to fetch selected garden details when component mounts
  }, [fetchGardenDetails]);

  if (!selectedGarden) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{selectedGarden.name}</h2>
      <p>Location: {selectedGarden.location}</p>
      <p>Size: {selectedGarden.size}</p>
      <p>Sunlight: {selectedGarden.sunlight}</p>
      
      <h3>Plants:</h3>
      <ul>
        {selectedGarden.plants.map((plant) => (
          <li key={plant._id}>
            <p>{plant.name}</p>
            <p>Quantity: {plant.quantity}</p>
            <p>Sow Date: {plant.sowDate}</p>
            <p>Transplant Date: {plant.transplantDate}</p>
            <p>Harvest Date: {plant.harvestDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedGarden: state.gardens.selectedGarden,
});

const mapDispatchToProps = {
  fetchGardenDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(GardenDetails);

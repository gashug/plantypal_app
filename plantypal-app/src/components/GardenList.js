// src/components/GardenList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGardens } from '../redux/actions/gardenActions';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom for navigation

const GardenList = () => {
  const dispatch = useDispatch();
  const gardens = useSelector((state) => state.gardens.gardens);
  const history = useHistory(); // Initialize useHistory for navigation

  useEffect(() => {
    dispatch(fetchGardens()); // Dispatch action to fetch gardens when component mounts
  }, [dispatch]);

  const navigateToGardenDetails = (gardenId) => {
    // Implement navigation logic to navigate to GardenDetails component
    history.push(`/garden/${gardenId}`); // Navigate to '/garden/:id' route
  };

  return (
    <div>
      <h2>Your Gardens</h2>
      <ul>
        {gardens.map((garden) => (
          <li key={garden._id} onClick={() => navigateToGardenDetails(garden._id)}>
            <h3>{garden.name}</h3>
            <p>Location: {garden.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GardenList;

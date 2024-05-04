// src/components/GardenForm.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createGarden } from '../redux/actions/gardenActions';

const GardenForm = ({ createNewGarden }) => {
  const [formData, setFormData] = useState({ name: '', location: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    createNewGarden(formData); // Dispatch action to create a new garden
    setFormData({ name: '', location: '' }); // Reset form after submission
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>Create New Garden</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
        />
        <button type="submit">Create Garden</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createNewGarden: (gardenData) => dispatch(createGarden(gardenData)),
});

export default connect(null, mapDispatchToProps)(GardenForm);

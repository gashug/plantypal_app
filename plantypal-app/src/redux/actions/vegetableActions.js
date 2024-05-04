// src/redux/actions/vegetableActions.js
import axios from 'axios';

// Action to fetch all vegetables
export const fetchVegetables = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/vegetables');
    dispatch({ type: 'FETCH_VEGETABLES', payload: response.data });
  } catch (error) {
    console.error('Error fetching vegetables:', error);
  }
};

// Action to create a new vegetable
export const createVegetable = (vegetableData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/vegetables', vegetableData);
    dispatch({ type: 'ADD_VEGETABLE', payload: response.data });
  } catch (error) {
    console.error('Error creating vegetable:', error);
  }
};

// Action to update an existing vegetable
export const updateVegetable = (vegetableId, updatedData) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/vegetables/${vegetableId}`, updatedData);
    dispatch({ type: 'UPDATE_VEGETABLE', payload: response.data });
  } catch (error) {
    console.error('Error updating vegetable:', error);
  }
};

// Action to delete a vegetable
export const deleteVegetable = (vegetableId) => async (dispatch) => {
  try {
    await axios.delete(`/api/vegetables/${vegetableId}`);
    dispatch({ type: 'DELETE_VEGETABLE', payload: vegetableId });
  } catch (error) {
    console.error('Error deleting vegetable:', error);
  }
};

// Define more actions as needed (e.g., setting selected vegetable, handling errors)

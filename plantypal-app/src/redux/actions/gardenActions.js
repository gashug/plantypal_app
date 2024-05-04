// src/redux/actions/gardenActions.js
import axios from 'axios';

// Action Types
export const FETCH_GARDENS = 'FETCH_GARDENS';
export const ADD_GARDEN = 'ADD_GARDEN';
export const UPDATE_GARDEN = 'UPDATE_GARDEN';
export const DELETE_GARDEN = 'DELETE_GARDEN';

// Action Creators
export const fetchGardens = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/gardens');
    dispatch({ type: FETCH_GARDENS, payload: response.data });
  } catch (error) {
    console.error('Error fetching gardens:', error);
  }
};

export const createGarden = (gardenData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/gardens', gardenData);
    dispatch({ type: ADD_GARDEN, payload: response.data });
  } catch (error) {
    console.error('Error creating garden:', error);
  }
};

export const updateGarden = (gardenId, updatedData) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/gardens/${gardenId}`, updatedData);
    dispatch({ type: UPDATE_GARDEN, payload: response.data });
  } catch (error) {
    console.error(`Error updating garden with ID ${gardenId}:`, error);
  }
};

export const deleteGarden = (gardenId) => async (dispatch) => {
  try {
    await axios.delete(`/api/gardens/${gardenId}`);
    dispatch({ type: DELETE_GARDEN, payload: gardenId });
  } catch (error) {
    console.error(`Error deleting garden with ID ${gardenId}:`, error);
  }
};

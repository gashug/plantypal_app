// src/redux/reducers/vegetableReducer.js

// Define initial state for vegetables
const initialState = {
  vegetables: [], // Array to store list of vegetables
  selectedVegetable: null // Object to store details of selected vegetable
};

// Define vegetableReducer function
const vegetableReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_VEGETABLES':
      return {
        ...state,
        vegetables: action.payload // Update vegetables array with fetched data
      };
    case 'ADD_VEGETABLE':
      return {
        ...state,
        vegetables: [...state.vegetables, action.payload] // Add new vegetable to vegetables array
      };
    case 'UPDATE_VEGETABLE':
      // Find and update specific vegetable in vegetables array
      const updatedVegetables = state.vegetables.map((vegetable) =>
        vegetable._id === action.payload._id ? action.payload : vegetable
      );
      return {
        ...state,
        vegetables: updatedVegetables
      };
    case 'DELETE_VEGETABLE':
      // Filter out deleted vegetable from vegetables array
      const filteredVegetables = state.vegetables.filter(
        (vegetable) => vegetable._id !== action.payload
      );
      return {
        ...state,
        vegetables: filteredVegetables
      };
    case 'SET_SELECTED_VEGETABLE':
      return {
        ...state,
        selectedVegetable: action.payload // Set selectedVegetable to the payload
      };
    default:
      return state;
  }
};

export default vegetableReducer;

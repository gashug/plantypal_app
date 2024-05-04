// src/redux/reducers/gardenReducer.js
const initialState = {
  gardens: [],
  selectedGarden: null,
  loading: false,
  error: null,
};

const gardenReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GARDENS_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_GARDENS_SUCCESS':
      return {
        ...state,
        gardens: action.payload,
        loading: false,
      };
    case 'FETCH_GARDENS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'ADD_GARDEN_SUCCESS':
      return {
        ...state,
        gardens: [...state.gardens, action.payload],
      };
    case 'SET_SELECTED_GARDEN':
      return {
        ...state,
        selectedGarden: action.payload,
      };
    case 'CLEAR_GARDENS':
      return {
        ...state,
        gardens: [],
      };
    case 'CLEAR_SELECTED_GARDEN':
      return {
        ...state,
        selectedGarden: null,
      };
    default:
      return state;
  }
};

export default gardenReducer;

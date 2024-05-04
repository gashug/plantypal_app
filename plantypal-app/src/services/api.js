// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // The backend API URL
  timeout: 5000,
});

export default api;

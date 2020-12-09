import axios from 'axios';

const api = axios.create({
  baseURL: 'https://5fd06b761f23740016631874.mockapi.io/api/',
});

export default api;

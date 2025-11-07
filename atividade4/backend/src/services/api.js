// src/services/api.js

import axios from 'axios';

// A URL base deve ser a do seu backend Node.js, geralmente rodando na porta 3000 ou 3001
const api = axios.create({
  baseURL: 'http://localhost:3000', // Altere para a porta do seu backend se for diferente
});

export default api;
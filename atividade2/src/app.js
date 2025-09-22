const express = require('express');
const app = express();
const tarefasRoutes = require('./routes/tarefasRoutes');

// Configurando middlewares
app.use(express.json()); // Para ler JSON no corpo da requisição
app.use('/tarefas', tarefasRoutes);

module.exports = app;
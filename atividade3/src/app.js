const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../swagger');

// Importação das rotas
const alunosRoutes = require('./routes/alunosRoutes');
const turmasRoutes = require('./routes/turmasRoutes');

// Configurando middlewares
app.use(express.json()); // Para ler JSON no corpo da requisição
app.use('/alunos', alunosRoutes);
app.use('/turmas', turmasRoutes);

// Configuração do Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
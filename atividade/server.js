const express = require('express');
const app = express();
const tarefasRoutes = require('./tarefas');

app.use(express.json()); // Para ler JSON no corpo da requisição
app.use('/tarefas', tarefasRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

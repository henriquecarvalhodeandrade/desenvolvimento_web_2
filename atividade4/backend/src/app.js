import express from 'express';
import cors from 'cors';
import alunosRoutes from './routes/alunosRoutes.js';
import turmasRoutes from './routes/turmasRoutes.js';

const app = express();

// Middleware para permitir requisições do Frontend (CORS)
app.use(cors({
  origin: 'http://localhost:5173', // Porta padrão do Vite/React
}));

// Middleware para processar JSON (necessário para req.body)
app.use(express.json());

// Rotas da API
app.use('/alunos', alunosRoutes);
app.use('/turmas', turmasRoutes);

export default app;
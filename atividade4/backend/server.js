import app from './src/app.js';

const PORT = 3000; // Porta do Backend

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
  console.log(`API Alunos: http://localhost:${PORT}/alunos`);
  console.log(`API Turmas: http://localhost:${PORT}/turmas`);
});
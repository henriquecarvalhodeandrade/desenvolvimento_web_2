// atividade3/src/routes/alunosRoutes.js

import { Router } from 'express';
import { 
  getAllAlunos, 
  getAlunoById, 
  createAluno, 
  updateAluno, 
  deleteAluno 
} from '../controllers/alunosController';

const router = Router();

// Rota de listagem
router.get('/', getAllAlunos);

// Rota de criação
router.post('/', createAluno);

// Rotas específicas por ID
router.get('/:id', getAlunoById);
router.put('/:id', updateAluno);
router.delete('/:id', deleteAluno);

export default router;
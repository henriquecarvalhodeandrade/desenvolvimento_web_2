import { Router } from 'express';
import { 
  getAllAlunos, 
  getAlunoById, 
  createAluno, 
  updateAluno, 
  deleteAluno 
} from './alunosController.js';

const router = Router();

router.get('/', getAllAlunos);
router.post('/', createAluno);
router.get('/:id', getAlunoById);
router.put('/:id', updateAluno);
router.delete('/:id', deleteAluno);

export default router;
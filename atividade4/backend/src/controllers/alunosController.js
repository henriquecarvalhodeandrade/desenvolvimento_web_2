import AlunosModel from '../models/alunosModel.js';

const getAllAlunos = (req, res) => {
  try {
    const alunos = AlunosModel.findAll();
    res.status(200).json(alunos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAlunoById = (req, res) => {
  try {
    const aluno = AlunosModel.findById(req.params.id);
    if (aluno) {
      res.status(200).json(aluno);
    } else {
      res.status(404).json({ message: 'Aluno não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createAluno = (req, res) => {
  try {
    const novoAluno = AlunosModel.create(req.body);
    res.status(201).json(novoAluno);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateAluno = (req, res) => {
  try {
    const alunoAtualizado = AlunosModel.update(req.params.id, req.body);
    if (alunoAtualizado) {
      res.status(200).json(alunoAtualizado);
    } else {
      res.status(404).json({ message: 'Aluno não encontrado para atualizar.' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteAluno = (req, res) => {
  try {
    const deleted = AlunosModel.delete(req.params.id);
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Aluno não encontrado para deletar.' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getAllAlunos,
  getAlunoById,
  createAluno,
  updateAluno,
  deleteAluno
};
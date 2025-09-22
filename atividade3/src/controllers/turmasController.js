const turmasModel = require('../models/turmasModel');

const getTurmas = (req, res) => {
  res.json(turmasModel.getTodasTurmas());
};

const criarTurma = (req, res) => {
  const { nome } = req.body;
  if (!nome) {
    return res.status(400).json({ erro: 'Nome da turma inválido' });
  }

  const novaTurma = turmasModel.criarTurma(nome);
  if (!novaTurma) {
    return res.status(400).json({ erro: 'Turma com este nome já existe' });
  }

  res.status(201).json(novaTurma);
};

const deletarTurma = (req, res) => {
  const id = parseInt(req.params.id);
  const sucesso = turmasModel.deletarTurma(id);
  if (!sucesso) {
    return res.status(404).json({ erro: 'Turma não encontrada' });
  }
  res.status(204).send();
};

module.exports = {
  getTurmas,
  criarTurma,
  deletarTurma,
};
const tarefasModel = require('../models/tarefasModel');

const getTarefas = (req, res) => {
  const { feito } = req.query;

  if (feito === 'true') {
    return res.json(tarefasModel.getTarefasFeitas());
  }

  if (feito === 'false') {
    return res.json(tarefasModel.getTodasTarefas().filter(tarefa => tarefa.feito === false));
  }

  res.json(tarefasModel.getTodasTarefas());
};

const getTarefaPorId = (req, res) => {
  const id = parseInt(req.params.id);
  const tarefa = tarefasModel.getTarefald(id);
  if (!tarefa) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' });
  }
  res.json(tarefa);
};

const criarTarefa = (req, res) => {
  const { titulo, feito } = req.body;
  if (typeof titulo !== 'string') {
    return res.status(400).json({ erro: 'Título inválido' });
  }
  const novaTarefa = tarefasModel.criarTarefa({ titulo, feito });
  res.status(201).json(novaTarefa);
};

const atualizarTarefa = (req, res) => {
  const id = parseInt(req.params.id);
  const tarefaAtualizada = tarefasModel.atualizarTarefa(id, req.body);
  if (!tarefaAtualizada) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' });
  }
  res.json(tarefaAtualizada);
};

const deletarTarefa = (req, res) => {
  const id = parseInt(req.params.id);
  const sucesso = tarefasModel.deletarTarefa(id);
  if (!sucesso) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' });
  }
  res.status(204).send();
};

module.exports = {
  getTarefas,
  getTarefaPorId,
  criarTarefa,
  atualizarTarefa,
  deletarTarefa,
};
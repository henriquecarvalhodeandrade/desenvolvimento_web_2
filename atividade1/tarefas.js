const express = require('express');
const router = express.Router();

let tarefas = []; // Lista de tarefas em memória
let idAtual = 1;

// 1. Visualizar todas as tarefas
router.get('/', (req, res) => {
  const { feito } = req.query;

  if (feito === 'true') {
    return res.json(tarefas.filter(tarefa => tarefa.feito === true));
  }

  if (feito === 'false') {
    return res.json(tarefas.filter(tarefa => tarefa.feito === false));
  }

  res.json(tarefas);
});

// 2. Inserir nova tarefa
router.post('/', (req, res) => {
  const { titulo, feito } = req.body;

  if (typeof titulo !== 'string') {
    return res.status(400).json({ erro: 'Título inválido' });
  }

  const novaTarefa = {
    id: idAtual++,
    titulo,
    feito: !!feito, // garante booleano
  };

  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});

// 3. Alterar uma tarefa existente
router.put('/', (req, res) => {
  const { id, titulo, feito } = req.body;

  const tarefa = tarefas.find(t => t.id === id);
  if (!tarefa) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' });
  }

  if (titulo !== undefined) tarefa.titulo = titulo;
  if (feito !== undefined) tarefa.feito = feito;

  res.json(tarefa);
});

// 4. Deletar uma tarefa
router.delete('/', (req, res) => {
  const { id } = req.body;

  const index = tarefas.findIndex(t => t.id === id);
  if (index === -1) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' });
  }

  tarefas.splice(index, 1);
  res.json({ mensagem: 'Tarefa deletada com sucesso' });
});

module.exports = router;

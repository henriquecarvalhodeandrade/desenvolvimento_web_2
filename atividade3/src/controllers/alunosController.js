const alunosModel = require('../models/alunosModel');

const getAlunos = (req, res) => {
  const { nome, turma } = req.query;

  let alunos = alunosModel.getTodosAlunos();

  if (nome) {
    alunos = alunos.filter(aluno =>
      aluno.nome.toLowerCase().includes(nome.toLowerCase())
    );
  }

  if (turma) {
    const turmaEncontrada = alunosModel.getTurmaPorNome(turma);
    if (turmaEncontrada) {
      alunos = alunos.filter(aluno => aluno.id_turma === turmaEncontrada.id);
    } else {
      return res.status(404).json({ erro: 'Turma não encontrada' });
    }
  }

  res.json(alunos);
};

const criarAluno = (req, res) => {
  const { nome, protocolo, id_turma, email } = req.body;
  if (!nome || !protocolo || !id_turma || !email) {
    return res.status(400).json({ erro: 'Dados de aluno inválidos' });
  }

  const novaAluno = alunosModel.criarAluno({ nome, protocolo, id_turma, email });
  if (!novaAluno) {
    return res.status(400).json({ erro: 'Turma não encontrada para o id_turma informado' });
  }
  res.status(201).json(novaAluno);
};

const atualizarAluno = (req, res) => {
  const id = parseInt(req.params.id);
  const alunoAtualizado = alunosModel.atualizarAluno(id, req.body);
  if (!alunoAtualizado) {
    return res.status(404).json({ erro: 'Aluno não encontrado' });
  }
  res.json(alunoAtualizado);
};

const deletarAluno = (req, res) => {
  const id = parseInt(req.params.id);
  const sucesso = alunosModel.deletarAluno(id);
  if (!sucesso) {
    return res.status(404).json({ erro: 'Aluno não encontrado' });
  }
  res.status(204).send();
};

module.exports = {
  getAlunos,
  criarAluno,
  atualizarAluno,
  deletarAluno,
};
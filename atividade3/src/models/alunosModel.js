const turmasModel = require('./turmasModel');

let alunos = [];
let idAtual = 1;

const getTodosAlunos = () => alunos;

const criarAluno = (alunoData) => {
  const turmaExiste = turmasModel.getTurmaPorId(alunoData.id_turma);
  if (!turmaExiste) {
    return null;
  }
  const novoAluno = {
    id: idAtual++,
    nome: alunoData.nome,
    protocolo: alunoData.protocolo,
    id_turma: alunoData.id_turma,
    email: alunoData.email,
  };
  alunos.push(novoAluno);
  return novoAluno;
};

const atualizarAluno = (id, alunoData) => {
  const aluno = alunos.find(a => a.id === id);
  if (!aluno) {
    return null;
  }
  if (alunoData.nome !== undefined) aluno.nome = alunoData.nome;
  if (alunoData.protocolo !== undefined) aluno.protocolo = alunoData.protocolo;
  if (alunoData.id_turma !== undefined) aluno.id_turma = alunoData.id_turma;
  if (alunoData.email !== undefined) aluno.email = alunoData.email;
  return aluno;
};

const deletarAluno = (id) => {
  const index = alunos.findIndex(a => a.id === id);
  if (index === -1) {
    return false;
  }
  alunos.splice(index, 1);
  return true;
};

module.exports = {
  getTodosAlunos,
  criarAluno,
  atualizarAluno,
  deletarAluno,
};
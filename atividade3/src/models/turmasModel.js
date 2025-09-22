let turmas = [];
let idAtual = 1;

const getTodasTurmas = () => turmas;

const getTurmaPorId = (id) => turmas.find(t => t.id === id);

const getTurmaPorNome = (nome) => turmas.find(t => t.nome === nome);

const criarTurma = (nome) => {
  const turmaExistente = turmas.find(t => t.nome.toLowerCase() === nome.toLowerCase());
  if (turmaExistente) {
    return null;
  }

  const novaTurma = {
    id: idAtual++,
    nome: nome,
  };
  turmas.push(novaTurma);
  return novaTurma;
};

const deletarTurma = (id) => {
  const index = turmas.findIndex(t => t.id === id);
  if (index === -1) {
    return false;
  }
  turmas.splice(index, 1);
  return true;
};

module.exports = {
  getTodasTurmas,
  getTurmaPorId,
  getTurmaPorNome,
  criarTurma,
  deletarTurma,
};
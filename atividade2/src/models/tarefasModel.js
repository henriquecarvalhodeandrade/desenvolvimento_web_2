let tarefas = [];
let idAtual = 1;

const getTodasTarefas = () => tarefas;

const getTarefald = (id) => tarefas.find(t => t.id === id);

const getTarefasFeitas = () => tarefas.filter(t => t.feito === true);

const criarTarefa = (taskData) => {
  const newTask = {
    id: idAtual++,
    titulo: taskData.titulo,
    feito: !!taskData.feito,
  };
  tarefas.push(newTask);
  return newTask;
};

const atualizarTarefa = (id, taskData) => {
  const tarefa = tarefas.find(t => t.id === id);
  if (!tarefa) {
    return null;
  }
  if (taskData.titulo !== undefined) tarefa.titulo = taskData.titulo;
  if (taskData.feito !== undefined) tarefa.feito = !!taskData.feito;
  return tarefa;
};

const deletarTarefa = (id) => {
  const index = tarefas.findIndex(t => t.id === id);
  if (index === -1) {
    return false;
  }
  tarefas.splice(index, 1);
  return true;
};

module.exports = {
  getTodasTarefas,
  getTarefald,
  getTarefasFeitas,
  criarTarefa,
  atualizarTarefa,
  deletarTarefa,
};
let turmas = [
  { id: 101, nome: 'TADS-1', turno: 'Manhã' },
  { id: 102, nome: 'TADS-2', turno: 'Noite' },
];
let nextTurmaId = 103;

class TurmasModel {
  static findAll() {
    return turmas;
  }

  static findById(id) {
    return turmas.find(turma => turma.id === parseInt(id, 10));
  }

  static create(turmaData) {
    if (!turmaData.nome || !turmaData.turno) {
      throw new Error("Dados da turma incompletos.");
    }
    const novaTurma = {
      id: nextTurmaId++,
      ...turmaData
    };
    turmas.push(novaTurma);
    return novaTurma;
  }

  static update(id, turmaData) {
    const index = turmas.findIndex(turma => turma.id === parseInt(id, 10));
    if (index !== -1) {
      turmas[index] = { ...turmas[index], ...turmaData, id: parseInt(id, 10) };
      return turmas[index];
    }
    return null;
  }

  static delete(id) {
    const initialLength = turmas.length;
    turmas = turmas.filter(turma => turma.id !== parseInt(id, 10));
    return turmas.length < initialLength;
  }
}

export default TurmasModel;
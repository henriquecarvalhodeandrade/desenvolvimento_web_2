let alunos = [
  { id: 1, nome: 'João Silva', matricula: '2023001', turmaId: 101, ativo: true },
  { id: 2, nome: 'Maria Souza', matricula: '2023002', turmaId: 102, ativo: true },
];
let nextAlunoId = 3;

class AlunosModel {
  static findAll() {
    return alunos;
  }

  static findById(id) {
    return alunos.find(aluno => aluno.id === parseInt(id, 10));
  }

  static create(alunoData) {
    if (!alunoData.nome || !alunoData.matricula || !alunoData.turmaId) {
      throw new Error("Dados do aluno incompletos.");
    }
    const novoAluno = {
      id: nextAlunoId++,
      ...alunoData,
      ativo: true,
    };
    alunos.push(novoAluno);
    return novoAluno;
  }

  static update(id, alunoData) {
    const index = alunos.findIndex(aluno => aluno.id === parseInt(id, 10));
    if (index !== -1) {
      alunos[index] = { ...alunos[index], ...alunoData, id: parseInt(id, 10) };
      return alunos[index];
    }
    return null;
  }

  static delete(id) {
    const initialLength = alunos.length;
    alunos = alunos.filter(aluno => aluno.id !== parseInt(id, 10));
    return alunos.length < initialLength;
  }
}

export default AlunosModel;
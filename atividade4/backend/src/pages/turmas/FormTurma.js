import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function FormTurma({ mode }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = mode === 'editar';
  
  const [turma, setTurma] = useState({
    nome: '',
    turno: ''
  });

  useEffect(() => {
    if (isEdit) {
      // Simulação de carregamento de dados da turma para edição (GET /turmas/:id)
      console.log(`Carregando dados da turma ID: ${id}`);
      // Em uma aplicação real, você faria uma chamada API aqui.
      const dadosMock = { id: id, nome: 'Turma Existente', turno: 'Tarde' };
      setTurma(dadosMock);
    }
  }, [isEdit, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTurma(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      // Lógica para salvar a edição (PUT /turmas/:id)
      console.log('Salvar edição da turma:', turma);
      alert(`Turma ${turma.nome} atualizada com sucesso!`);
    } else {
      // Lógica para criar nova turma (POST /turmas)
      console.log('Criar nova turma:', turma);
      alert(`Turma ${turma.nome} criada com sucesso!`);
    }
    navigate('/turmas'); // Redireciona de volta para a lista
  };

  return (
    <div>
      <h1>{isEdit ? `Editar Turma ID: ${id}` : 'Criar Nova Turma'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome da Turma:</label>
          <input type="text" name="nome" value={turma.nome} onChange={handleChange} required />
        </div>
        <div>
          <label>Turno:</label>
          <input type="text" name="turno" value={turma.turno} onChange={handleChange} required />
        </div>
        <button type="submit">{isEdit ? 'Salvar Edição' : 'Criar Turma'}</button>
        <button type="button" onClick={() => navigate('/turmas')} style={{ marginLeft: '10px' }}>
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default FormTurma;
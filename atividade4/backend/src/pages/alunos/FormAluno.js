// src/pages/alunos/FormAluno.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api'; 

function FormAluno({ mode }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = mode === 'editar';
  
  const [aluno, setAluno] = useState({
    nome: '',
    matricula: '',
    // Adicione outros campos necessários como 'turmaId' se precisar fazer a ligação
  });
  const [loading, setLoading] = useState(isEdit);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isEdit) {
      const fetchAluno = async () => {
        try {
          const response = await api.get(`/alunos/${id}`); // GET /alunos/:id
          setAluno(response.data);
        } catch (err) {
          console.error("Erro ao carregar aluno:", err);
          setError("Não foi possível carregar os dados do aluno.");
        } finally {
          setLoading(false);
        }
      };
      fetchAluno();
    }
  }, [isEdit, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAluno(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      if (isEdit) {
        // Envia dados para atualização (PUT /alunos/:id)
        await api.put(`/alunos/${id}`, aluno);
        alert('Aluno atualizado com sucesso!');
      } else {
        // Envia dados para criação (POST /alunos)
        await api.post('/alunos', aluno);
        alert('Aluno criado com sucesso!');
      }
      navigate('/alunos'); // Redireciona de volta para a lista
    } catch (err) {
      console.error("Erro ao salvar aluno:", err.response ? err.response.data : err.message);
      setError(isEdit ? "Erro ao atualizar aluno." : "Erro ao criar aluno. Verifique os dados.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <p>A carregar dados do aluno...</p>;
  if (error && isEdit) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h1>{isEdit ? `Editar Aluno ID: ${id}` : 'Criar Novo Aluno'}</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" value={aluno.nome} onChange={handleChange} required disabled={submitting} />
        </div>
        <div>
          <label htmlFor="matricula">Matrícula:</label>
          <input type="text" id="matricula" name="matricula" value={aluno.matricula} onChange={handleChange} required disabled={submitting} />
        </div>
        {/* Adicione campos adicionais aqui, como o select para 'turma' se já existir o endpoint de turmas. */}
        
        <button type="submit" disabled={submitting} style={{ marginTop: '15px' }}>
          {submitting ? 'A Guardar...' : (isEdit ? 'Guardar Edição' : 'Criar Aluno')}
        </button>
        <button type="button" onClick={() => navigate('/alunos')} style={{ marginLeft: '10px' }} disabled={submitting}>
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default FormAluno;
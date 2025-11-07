// src/pages/alunos/ListaAlunos.js
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api'; // Importa a configuração do axios

function ListaAlunos() {
  const navigate = useNavigate();
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para buscar os dados dos alunos
  const fetchAlunos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Faz a requisição GET para a rota de listagem de alunos
      const response = await api.get('/alunos');
      setAlunos(response.data);
    } catch (err) {
      console.error("Erro ao buscar alunos:", err);
      setError("Não foi possível carregar a lista de alunos.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAlunos();
  }, [fetchAlunos]);
  
  // Função para deletar um aluno (adiciona funcionalidade completa)
  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este aluno?')) {
      try {
        await api.delete(`/alunos/${id}`);
        alert('Aluno excluído com sucesso!');
        // Recarrega a lista após a exclusão
        fetchAlunos();
      } catch (err) {
        console.error("Erro ao excluir aluno:", err);
        alert('Erro ao excluir aluno.');
      }
    }
  };

  if (loading) return <p>A carregar alunos...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (alunos.length === 0) return (
    <div>
      <h1>Listagem de Alunos</h1>
      <p>Nenhum aluno encontrado.</p>
      <button onClick={() => navigate('/alunos/novo')}>Novo Aluno</button>
    </div>
  );


  return (
    <div>
      <h1>Listagem de Alunos</h1>
      <button onClick={() => navigate('/alunos/novo')}>
        Novo Aluno
      </button>

      <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #333' }}>
            <th style={{ padding: '8px', textAlign: 'left' }}>ID</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Nome</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Matrícula</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map(aluno => (
            <tr key={aluno.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '8px' }}>{aluno.id}</td>
              <td style={{ padding: '8px' }}>{aluno.nome}</td>
              <td style={{ padding: '8px' }}>{aluno.matricula}</td>
              <td style={{ padding: '8px' }}>
                <button onClick={() => navigate(`/alunos/editar/${aluno.id}`)} style={{ marginRight: '10px' }}>
                  Editar
                </button>
                <button onClick={() => handleDelete(aluno.id)} style={{ color: 'red' }}>
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaAlunos;
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ListaTurmas() {
  const navigate = useNavigate();

  // Esta lista seria populada por uma requisição ao seu backend (GET /turmas)
  const turmasMock = [
    { id: 101, nome: 'TADS-1', turno: 'Manhã' },
    { id: 102, nome: 'TADS-2', turno: 'Noite' },
  ];

  return (
    <div>
      <h1>Listagem de Turmas</h1>
      <button onClick={() => navigate('/turmas/nova')}>
        Nova Turma
      </button>

      {/* Tabela de listagem */}
      <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #333' }}>
            <th style={{ padding: '8px', textAlign: 'left' }}>Nome</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Turno</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {turmasMock.map(turma => (
            <tr key={turma.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '8px' }}>{turma.nome}</td>
              <td style={{ padding: '8px' }}>{turma.turno}</td>
              <td style={{ padding: '8px' }}>
                <button onClick={() => navigate(`/turmas/editar/${turma.id}`)}>
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaTurmas;
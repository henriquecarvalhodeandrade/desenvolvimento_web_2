const express = require('express');
const router = express.Router();
const alunosController = require('../controllers/alunosController');

/**
 * @swagger
 * components:
 * schemas:
 * Aluno:
 * type: object
 * required:
 * - nome
 * - protocolo
 * - id_turma
 * - email
 * properties:
 * id:
 * type: integer
 * description: O ID auto-gerado do aluno.
 * nome:
 * type: string
 * description: O nome completo do aluno.
 * protocolo:
 * type: string
 * description: O número de matrícula do aluno.
 * id_turma:
 * type: integer
 * description: O ID da turma à qual o aluno pertence.
 * email:
 * type: string
 * description: O endereço de e-mail do aluno.
 * example:
 * id: 1
 * nome: "Luis Fernando"
 * protocolo: "12345"
 * id_turma: 1
 * email: "luis.fernando@email.com"
 */

/**
 * @swagger
 * tags:
 * name: Alunos
 * description: Gerenciamento da API de alunos
 */

/**
 * @swagger
 * /alunos:
 * get:
 * summary: Lista todos os alunos ou filtra por nome e/ou turma.
 * tags: [Alunos]
 * parameters:
 * - in: query
 * name: nome
 * schema:
 * type: string
 * description: Filtra alunos pelo nome.
 * - in: query
 * name: turma
 * schema:
 * type: string
 * description: Filtra alunos pelo nome da turma.
 * responses:
 * 200:
 * description: A lista de alunos.
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/Aluno'
 */
router.get('/', alunosController.getAlunos);

/**
 * @swagger
 * /alunos:
 * post:
 * summary: Cria um novo aluno.
 * tags: [Alunos]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Aluno'
 * responses:
 * 201:
 * description: O aluno foi criado com sucesso.
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Aluno'
 * 400:
 * description: Erro na requisição (dados inválidos).
 */
router.post('/', alunosController.criarAluno);

/**
 * @swagger
 * /alunos/{id}:
 * put:
 * summary: Atualiza um aluno pelo ID.
 * tags: [Alunos]
 * parameters:
 * - in: path
 * name: id
 * schema:
 * type: integer
 * required: true
 * description: O ID do aluno.
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Aluno'
 * responses:
 * 200:
 * description: O aluno foi atualizado com sucesso.
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Aluno'
 * 404:
 * description: Aluno não encontrado.
 */
router.put('/:id', alunosController.atualizarAluno);

/**
 * @swagger
 * /alunos/{id}:
 * delete:
 * summary: Remove um aluno pelo ID.
 * tags: [Alunos]
 * parameters:
 * - in: path
 * name: id
 * schema:
 * type: integer
 * required: true
 * description: O ID do aluno.
 * responses:
 * 204:
 * description: Aluno removido com sucesso.
 * 404:
 * description: Aluno não encontrado.
 */
router.delete('/:id', alunosController.deletarAluno);

module.exports = router;
const express = require('express');
const router = express.Router();
const turmasController = require('../controllers/turmasController');

/**
 * @swagger
 * components:
 * schemas:
 * Turma:
 * type: object
 * required:
 * - nome
 * properties:
 * id:
 * type: integer
 * description: O ID auto-gerado da turma.
 * nome:
 * type: string
 * description: O código da turma (ex: "INFO1", "ADS2").
 * example:
 * id: 1
 * nome: "INFO4"
 */

/**
 * @swagger
 * tags:
 * name: Turmas
 * description: Gerenciamento da API de turmas
 */

/**
 * @swagger
 * /turmas:
 * get:
 * summary: Lista todas as turmas.
 * tags: [Turmas]
 * responses:
 * 200:
 * description: A lista de turmas.
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/Turma'
 */
router.get('/', turmasController.getTurmas);

/**
 * @swagger
 * /turmas:
 * post:
 * summary: Cria uma nova turma.
 * tags: [Turmas]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Turma'
 * responses:
 * 201:
 * description: A turma foi criada com sucesso.
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Turma'
 * 400:
 * description: Erro na requisição (nome da turma já existe).
 */
router.post('/', turmasController.criarTurma);

/**
 * @swagger
 * /turmas/{id}:
 * delete:
 * summary: Remove uma turma pelo ID.
 * tags: [Turmas]
 * parameters:
 * - in: path
 * name: id
 * schema:
 * type: integer
 * required: true
 * description: O ID da turma.
 * responses:
 * 204:
 * description: Turma removida com sucesso.
 * 404:
 * description: Turma não encontrada.
 */
router.delete('/:id', turmasController.deletarTurma);

module.exports = router;
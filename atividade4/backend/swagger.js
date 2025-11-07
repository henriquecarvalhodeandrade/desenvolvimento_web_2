const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Cadastro de Alunos com Turmas',
            version: '1.0.0',
            description: 'API para gerenciar o cadastro de alunos e turmas do IFSP Jacareí.',
            contact: {
                name: 'Desenvolvimento Web 2',
            },
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

module.exports = swaggerSpec;
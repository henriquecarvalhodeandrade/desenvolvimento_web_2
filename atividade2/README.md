# API de Lista de Tarefas (Node.js e Express)

Esta é uma API RESTful simples para gerenciar uma lista de tarefas. Ela foi desenvolvida usando Node.js, Express e a arquitetura MVC (Model-View-Controller) para garantir a separação de responsabilidades e facilitar a manutenção.

## Estrutura do Projeto

A estrutura de pastas do projeto segue o padrão MVC, conforme o PDF de exemplo:

/
├── server.js
└── src/
├── app.js
├── controllers/
│   └── tarefasController.js
├── models/
│   └── tarefasModel.js
└── routes/
└── tarefasRoutes.js


* **`server.js`**: Ponto de entrada da aplicação.
* **`src/app.js`**: Configura o servidor Express e os middlewares.
* **`src/routes/tarefasRoutes.js`**: Define as rotas (URLs) da API e as associa aos controladores.
* **`src/controllers/tarefasController.js`**: Contém a lógica de negócio, recebendo as requisições, interagindo com o modelo e enviando as respostas.
* **`src/models/tarefasModel.js`**: Gerencia os dados (atualmente em memória) e as operações de manipulação.

## Como Rodar a API

Para executar a API em seu ambiente local, siga os passos abaixo:

1.  **Pré-requisitos:** Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina. O npm (gerenciador de pacotes do Node.js) é instalado junto com ele.

2.  **Navegue até o diretório do projeto:**
    Abra seu terminal ou prompt de comando e navegue até a pasta `atividade2`:

    ```sh
    cd caminho/para/desenvolvimento_web_2/atividade2
    ```

3.  **Instale as dependências:**
    Execute o comando para instalar as dependências necessárias do projeto:

    ```sh
    npm install
    ```

4.  **Inicie o servidor:**
    Agora, você pode iniciar a API:

    ```sh
    node server.js
    ```

    O servidor será iniciado na porta 3000. Você verá a seguinte mensagem no seu terminal:
    `Servidor rodando em http://localhost:3000`

## Endpoints da API

A API implementa as operações CRUD (Create, Read, Update, Delete) em recursos de tarefas.

### 1. Visualizar Todas as Tarefas (READ)

* **Método:** `GET`
* **URL:** `/tarefas`
* **Descrição:** Retorna a lista completa de tarefas. Você também pode filtrar por status (`feito` ou `não feito`).
* **Exemplo de Requisição:**
    * `GET http://localhost:3000/tarefas` (Para obter todas as tarefas)
    * `GET http://localhost:3000/tarefas?feito=true` (Para obter apenas as tarefas concluídas)

### 2. Criar uma Nova Tarefa (CREATE)

* **Método:** `POST`
* **URL:** `/tarefas`
* **Descrição:** Adiciona uma nova tarefa à lista.
* **Corpo da Requisição (JSON):**
    ```json
    {
      "titulo": "Título da sua nova tarefa",
      "feito": false
    }
    ```
* **Resposta de Sucesso:** A tarefa criada com status `201 Created`.
* **Exemplo de Requisição (com `curl`):**
    ```sh
    curl -X POST -H "Content-Type: application/json" -d '{"titulo":"Estudar Express", "feito": false}' http://localhost:3000/tarefas
    ```

### 3. Visualizar uma Tarefa por ID (READ)

* **Método:** `GET`
* **URL:** `/tarefas/:id`
* **Descrição:** Retorna uma tarefa específica com base no seu ID. Se a tarefa não for encontrada, retorna um erro `404 Not Found`.
* **Exemplo de Requisição:**
    * `GET http://localhost:3000/tarefas/1`

### 4. Alterar uma Tarefa (UPDATE)

* **Método:** `PUT`
* **URL:** `/tarefas/:id`
* **Descrição:** Atualiza uma tarefa existente.
* **Corpo da Requisição (JSON):**
    ```json
    {
      "titulo": "Título atualizado",
      "feito": true
    }
    ```
* **Resposta de Sucesso:** A tarefa atualizada. Se a tarefa não for encontrada, retorna um erro `404 Not Found`.
* **Exemplo de Requisição (com `curl`):**
    ```sh
    curl -X PUT -H "Content-Type: application/json" -d '{"titulo":"Terminar o projeto", "feito": true}' http://localhost:3000/tarefas/1
    ```

### 5. Deletar uma Tarefa (DELETE)

* **Método:** `DELETE`
* **URL:** `/tarefas/:id`
* **Descrição:** Remove uma tarefa da lista com base no seu ID. Se a tarefa não for encontrada, retorna um erro `404 Not Found`.
* **Resposta de Sucesso:** Um código de status `204 No Content`.
* **Exemplo de Requisição (com `curl`):**
    ```sh
    curl -X DELETE http://localhost:3000/tarefas/1
    ```
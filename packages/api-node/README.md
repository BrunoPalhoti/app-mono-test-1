# API Node.js - Gerenciamento de Usuários e Postagens

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para criação de APIs RESTful.
- **JWT**: Autenticação de usuários.
- **CORS**: Permite requisições de diferentes origens.

## O que foi implementado

- **Rotas de Usuários** (`/users`):
    - `GET /users/getUsers`: Lista usuários (autenticado)
    - `POST /users/createUser`: Cria usuário (autenticado)
    - `PATCH /users/updateUser/:id`: Atualiza usuário (autenticado)
    - `DELETE /users/deleteUser/:id`: Remove usuário (autenticado)

- **Rotas de Postagens** (`/posts`):
    - `GET /posts/`: Lista postagens (autenticado)
    - `POST /posts/createPost/:userId`: Cria postagem (autenticado)
    - `POST /posts/:id/like`: Curte uma postagem (autenticado)

- **Rotas de Autenticação** (`/auth`):
    - `POST /auth/login`: Realiza login e retorna token JWT

## Como subir a API

1. Instale as dependências:
    ```bash
    npm install
    ```

2. Execute a API:
    ```bash
    npm start
    ```


3. Acesse a API em: [http://localhost:3333](http://localhost:3333)

## Documentação Swagger

Após subir a API, acesse a documentação interativa do Swagger:

- [http://localhost:3333/docs](http://localhost:3333/docs)

Nessa página você pode:
- Visualizar todos os endpoints disponíveis
- Ver exemplos de requisições e respostas
- Testar chamadas diretamente pelo navegador

Se quiser saber como cada rota funciona ou testar a API, utilize o Swagger para facilitar o desenvolvimento e integração.


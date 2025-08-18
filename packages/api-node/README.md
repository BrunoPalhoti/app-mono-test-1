# Histórico de Alterações - API Node.js

## Visão Geral

Este projeto implementa uma API RESTful para gerenciamento de usuários e postagens, utilizando Node.js, Express, JWT, PostgreSQL e Redis. Abaixo estão as principais alterações e melhorias realizadas por mim.

---

## Principais Alterações Realizadas

### 1. **Autenticação JWT**
- Implementei autenticação JWT nas rotas protegidas.
- Criei middleware [`auth/authenticate.js`](auth/authenticate.js) para validação do token.
- Integração com Redis para armazenamento de tokens de sessão.

### 2. **CRUD de Usuários**
- Criei endpoints para listar, criar, atualizar e remover usuários:
  - [`controllers/user/get/get-user.js`](controllers/user/get/get-user.js)
  - [`controllers/user/post/create-user.js`](controllers/user/post/create-user.js)
  - [`controllers/user/patch/update-user.js`](controllers/user/patch/update-user.js)
  - [`controllers/user/delete/delete-user.js`](controllers/user/delete/delete-user.js)
- Adicionei campo `active` para desativação lógica de usuários ([`migrations/004_add_active_to_users.js`](migrations/004_add_active_to_users.js)).

### 3. **Posts e Likes**
- Implementei CRUD de posts e funcionalidade de likes:
  - [`controllers/posts/get/get-posts.js`](controllers/posts/get/get-posts.js)
  - [`controllers/posts/post/create_post.js`](controllers/posts/post/create_post.js)
  - [`controllers/posts/post/like-post.js`](controllers/posts/post/like-post.js)
- Criei tabela de likes com restrição de único like por usuário ([`migrations/005_create_post_likes_table.js`](migrations/005_create_post_likes_table.js)).

### 4. **Migrations e Modelagem**
- Modelei tabelas com constraints e campos adicionais:
  - Campo `avatar` para usuários ([`migrations/006_add_avatar_to_users.js`](migrations/006_add_avatar_to_users.js)).
  - Campo `password` para autenticação ([`migrations/007_add_password_to_users.js`](migrations/007_add_password_to_users.js)).
  - Constraint de e-mail único ([`migrations/003_add_unique_email_to_users.js`](migrations/003_add_unique_email_to_users.js)).

### 5. **Testes Automatizados**
- Implementei testes automatizados para autenticação, usuários e posts:
  - [`teste/auth/authenticate.test.js`](teste/auth/authenticate.test.js)
  - [`teste/crud/crud.test.js`](teste/crud/crud.test.js)
  - [`teste/posts/posts.test.js`](teste/posts/posts.test.js)

### 6. **Documentação Swagger**
- Configurei documentação interativa com Swagger ([`app.js`](app.js)), detalhando todos os endpoints.

### 7. **Boas Práticas**
- Utilizei variáveis de ambiente para configuração sensível.
- Padronizei respostas HTTP e tratamento de erros.
- Organizei o projeto em camadas (controllers, models, routes, migrations).

### 8. Como visualizar o token JWT no Redis
- docker exec -it api-node-redis-1 redis-cli
- keys *
---

## Como subir e testar

1. Instale dependências:  
   `npm install`
2. Execute as migrations:  
   `npm run migrate`
3. Inicie a API:  
   `npm start`
4. Teste endpoints e autenticação via Swagger:  
   [http://localhost:3333/docs](http://localhost:3333/docs)

---

## Considerações

Todas as alterações foram pensadas para garantir segurança, escalabilidade e facilidade de manutenção, seguindo boas práticas de desenvolvimento pleno.

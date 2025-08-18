# Frontend Next.js - Timeline e Perfil de Usuário

## Tecnologias Utilizadas

- **Next.js**: Framework React para aplicações server-side rendering e estáticas.
- **React**: Biblioteca para construção de interfaces de usuário.
- **MUI (Material UI)**: Biblioteca de componentes visuais para React.
- **Tailwind CSS**: Framework para estilização rápida e responsiva.
- **TypeScript**: Tipagem estática para maior segurança no desenvolvimento.

## O que foi implementado

- **Página de Login (`/`)**: Autenticação de usuário utilizando MUI para o formulário.
- **Página de Timeline (`/timeline`)**: Exibe as postagens dos usuários (estrutura pronta para integração com backend).
- **Página de Perfil (`/profile`)**: Mostra dados do usuário logado, avatar, tipo de perfil e botão de logout, utilizando componentes MUI.
- **Estrutura de componentes**: Utilização de componentes React para organização do layout.

- **Estilização global**: Arquivo [`app/globals.css`](packages/frontend-nextjs/app/globals.css) com Tailwind CSS.
- **Layout customizado**: Arquivo [`app/layout.tsx`](packages/frontend-nextjs/app/layout.tsx) para estrutura base da aplicação.

## Como subir o projeto

1. Instale as dependências:
    ```bash
    npm install
    ```

2. Execute o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

3. Acesse o frontend em: [http://localhost:3000](http://localhost:3000)




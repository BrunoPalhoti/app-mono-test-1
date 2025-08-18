# Histórico de Alterações - Projeto Frontend Next.js

## Principais melhorias e implementações

- Refatorei a estrutura de componentes para maior reutilização e organização do código.
- Implementei autenticação de usuário na página de login, integrando com backend via JWT.
- Adicionei integração completa da Timeline com a API, exibindo posts dinâmicos e atualizando likes em tempo real.
- Criei página de perfil com exibição de dados do usuário logado, avatar dinâmico e botão de logout funcional.
- Padronizei estilos globais utilizando Tailwind CSS e MUI, garantindo responsividade e visual moderno.
- Corrigi bugs de renderização e estados, melhorando a experiência do usuário.
- Documentei endpoints e fluxos principais para facilitar manutenção e onboarding de novos devs.
- Adicionei testes unitários para hooks e componentes críticos, aumentando a confiabilidade do projeto.
- Otimizei chamadas à API, reduzindo tempo de resposta e melhorando performance da aplicação.

## Como testar as alterações

1. Instale as dependências:
    ```bash
    npm install
    ```

2. Execute o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

3. Acesse [http://localhost:3000](http://localhost:3000) e navegue pelas páginas de Login, Timeline e Perfil para validar as funcionalidades.

---

Essas mudanças garantem melhor escalabilidade, organização e experiência para o usuário e para o time de desenvolvimento.
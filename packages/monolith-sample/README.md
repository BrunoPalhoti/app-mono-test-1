Correção de erro 403 Forbidden na integração frontend-backend
Inicialmente, o backend estava configurado para rodar na porta 5000, mas essa porta estava ocupada por outro processo no sistema.
Por isso, o backend foi iniciado na porta 5001.
O campo "proxy" em package.json foi atualizado para "http://localhost:5001", garantindo que as requisições do frontend fossem corretamente redirecionadas para o backend.
Após a alteração, o frontend foi reiniciado para aplicar a nova configuração.
Com isso, as requisições passaram a funcionar normalmente, eliminando o erro 403 Forbidden.
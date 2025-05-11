# 🧠 Observações

- As senhas dos usuários são armazenadas como **hashes seguros**, nunca em texto plano.
- O JWT carrega apenas informações básicas do usuário (id, email, name).
- Para acessar rotas protegidas, é necessário incluir o token JWT no cabeçalho da requisição.

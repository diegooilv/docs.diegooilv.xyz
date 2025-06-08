# 🔐 Segurança

A API usa dois mecanismos principais de segurança:

- **Chave de API**: Protege algumas rotas como a `/app/buscar`.
- **JWT (JSON Web Token)**: Protege rotas que exigem autenticação do usuário.

## Middleware
- **`validKey`**: Verifica a presença de uma chave de API válida.
- **`verifyAuthToken`**: Verifica um token JWT válido.
- **`validateBodyFields`**: Garante que os campos obrigatórios estejam presentes nas requisições.

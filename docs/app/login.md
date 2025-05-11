# 🔐 POST `/app/login`

- **Descrição**: Autentica o usuário e gera um token JWT.
- **Body obrigatório**:

  ```json
  {
    "email": "diego@email.com",
    "password": "senhaSegura"
  }
  ```

**Resposta**:

```json
{
  "token": "JWT_gerado"
}
```

### Observações:

- O campo `password` é a senha do usuário, que deve ser validada contra o hash armazenado no banco de dados.
- Caso as credenciais estejam corretas, um **token JWT** será gerado e retornado.
- O token JWT deve ser usado nas requisições subsequentes que exigem autenticação.

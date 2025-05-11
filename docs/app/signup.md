# 🧾 POST `/app/signup`

- **Descrição**: Cria um novo usuário.
- **Body obrigatório**:

  ```json
  {
    "name": "Diego",
    "email": "diego@email.com",
    "plainPassword": "senhaSegura"
  }
  ```

**Resposta**:

```json
{
  "message": "Usuário criado!"
}
```

### Observações:

- O campo `plainPassword` é a senha em texto simples, que será transformada em um hash seguro antes de ser armazenada no banco de dados.
- Se o e-mail já estiver em uso, a API retornará um erro com código `400`.

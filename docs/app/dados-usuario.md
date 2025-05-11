# ✅ POST `/app/`

- **Descrição**: Retorna os dados do usuário autenticado (**nome e e-mail**).

- **Autenticação**: Protegida por token JWT.

- **Headers esperados**:

  ```txt
  Authorization: Bearer <token>
  ```

**Resposta**:

```json
{
  "name": "Diego",
  "email": "diego@email.com"
}
```

### Observações:

- O token JWT no cabeçalho `Authorization` deve ser válido e correspondente ao usuário autenticado.
- Caso o token não seja válido ou esteja ausente, será retornado um erro com código de status `401 Unauthorized`.
- Os dados retornados incluem o **nome** e o **e-mail** do usuário autenticado.

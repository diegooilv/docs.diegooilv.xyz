# 🔍 POST `/app/buscar`

- **Descrição**: Retorna **todos os registros salvos** no banco de dados.

- **Autenticação**: Protegida por chave de API (`x-api-key`).

- **Headers esperados**:

  ```txt
  x-api-key: sua_chave_aqui
````

* **Resposta**:

  ```json
  [
    {
      "id": 1,
      "name": "Diego",
      "email": "diego@email.com",
      ...
    },
    ...
  ]
  ```

### Observações:

* A chave de API fornecida no cabeçalho é necessária para autenticar a requisição.
* A resposta retorna uma lista de objetos com os registros salvos no banco de dados.
* Em caso de falha, será retornado um erro com código de status adequado (exemplo: `401 Unauthorized` se a chave de API for inválida).

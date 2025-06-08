# 🆔 GET `/dex/pokemon/id/:id`

- **Descrição**: Retorna os **dados completos de um Pokémon** com base no seu **ID numérico**.

## 📌 Parâmetros de Rota

```

:id → número inteiro do Pokémon

```

## 📥 Exemplo de Requisição

```

GET /dex/pokemon/id/772

```

## 📤 Resposta

```json
{
  "name": {
    "english": "Type: Null",
    "japanese": "タイプ：ヌル",
    "chinese": "属性：空",
    "french": "Silvallié"
  },
  "base": {
    "Sp": {
      " Attack": 95,
      " Defense": 95
    },
    "HP": 95,
    "Attack": 95,
    "Defense": 95,
    "Speed": 59
  },
  "_id": 772,
  "type": ["Normal"]
}
```

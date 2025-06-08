# 🔤 GET `/dex/pokemon/name/:name`

- **Descrição**: Retorna os **dados completos de um Pokémon** com base no seu **nome**.

## 📌 Parâmetros de Rota
```

:name → nome em inglês do Pokémon

```

## 📥 Exemplo de Requisição
```

GET /dex/pokemon/name/Type:%20Null

```

## 📤 Resposta
```json
[
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
    "type": [
      "Normal"
    ]
  }
]
```
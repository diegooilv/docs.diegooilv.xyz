# 🔎 GET `dex/type/name/:name`

- **Descrição**: Retorna a tradução de um **tipo de Pokémon** em diferentes idiomas.

## 📌 Parâmetros de Rota

```

:name → nome do tipo (em inglês)

```

## 📥 Exemplo de Requisição

```

GET dex/type/name/Flying

```

## 📤 Resposta

```json
{
  "english": "Flying",
  "chinese": "飞行",
  "japanese": "ひこう"
}
```

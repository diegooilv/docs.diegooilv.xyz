# 🛠️ Como Usar

## 1️⃣ Estrutura da Requisição

A entrada é enviada **via body da requisição POST em JSON**. Você pode enviar:

```json
{
  "prompt": "Olá, me explique o que é MoE",
  "model": "openai/gpt-oss-20b:free",
  "system": "Você é um assistente carismático, amigável e paciente..."
}
```

* **prompt**: O texto que você quer que a IA responda.
* **model**: O modelo de IA que deseja utilizar (ex.: `"openai/gpt-oss-20b:free"`).
* **system (opcional)**: Instruções para definir o comportamento da IA (ex.: tom, estilo, regras).

  * Se não enviado, o sistema usará uma **frase padrão** definindo a IA como carismática, amigável, paciente e clara.

> 🔹 Tudo é enviado **no body da requisição**, não em query params.

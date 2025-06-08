# 📦 API `/dex` — Visão Geral

Esta API fornece informações completas sobre **Pokémons** e seus **tipos**, com suporte a múltiplos idiomas. As rotas estão organizadas sob o prefixo `/dex`.

## 📁 Estrutura da API

As rotas principais são:

- `/dex/pokemon/id/:id` — Buscar dados de um Pokémon pelo seu **ID**.
- `/dex/pokemon/name/:name` — Buscar dados de um Pokémon pelo seu **nome**.
- `/dex/type/name/:name` — Buscar a tradução de um **tipo de Pokémon**.

> Todas as rotas são públicas e utilizam validação de parâmetros.

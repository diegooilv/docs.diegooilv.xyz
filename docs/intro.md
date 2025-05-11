---
sidebar_position: 1
---

# 🛠️ Introdução

Bem-vindo à documentação da **API de aprendizado com Express**!

Este projeto foi desenvolvido com o intuito de aprimorar o entendimento sobre como construir e gerenciar APIs utilizando **Express**. A API abrange funcionalidades básicas de autenticação de usuários, gerenciamento de dados protegidos e segurança, explorando conceitos importantes como **chave de API**, **tokens JWT** e **controle de acesso**.

## Objetivo do Projeto

Como estudante do **IFRS**, o principal objetivo deste projeto é aprender a estruturar uma API eficiente, com rotas que incluem:

- **Autenticação** de usuários através de **login** e **signup**.
- **Proteção de rotas** usando **JWT**.
- **Manipulação de dados** de forma segura e escalável.

## Tecnologias Utilizadas

- **Node.js** com **Express**: Framework para construção da API.
- **JWT** (JSON Web Token): Para autenticação de usuários.
- **Middleware**: Para validação de dados e controle de acesso.
- **Banco de Dados**: Utilizado para armazenar informações de usuários (em um banco simulado ou real).

## Como Usar a API

Siga os passos abaixo para interagir com a API:

1. **Criar um novo usuário** utilizando o endpoint **`/app/signup`**.
2. **Autenticar o usuário** com o endpoint **`/app/login`** e obter um **token JWT**.
3. **Acessar dados protegidos** utilizando o token JWT no cabeçalho da requisição.
4. **Buscar e manipular dados** através das rotas protegidas, como **`/app/buscar`** e **`/app/dados-usuario`**.

Essa API serve como uma base para quem deseja entender os princípios de criação de APIs com Express, e serve também para fins educacionais no processo de aprendizado.

Pronto para começar? Vamos explorar as rotas da API!

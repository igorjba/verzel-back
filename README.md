# ✨ **Catálogo de Veículos**

<center>

### [Rodando Localmente](#🏡-rodando-localmente) ▪️ [Diagrama](#📕-diagrama-banco-de-dados) ▪️ [Fluxogramas](#📘-fluxogramas) ▪️ [Funcionalidades](#📚-funcionalidades) ▪️ [Tecnologias](#🚀-tecnologias)

</center>

[Front: https://github.com/igorjba/verzel-front](https://github.com/igorjba/verzel-front)
[Back: https://github.com/igorjba/verzel-back](https://github.com/igorjba/verzel-back)

## 🏡 **Rodando localmente**

### Para rodar o projeto localmente, siga as seguintes instruções

<br />
<details><summary>Clique aqui</summary>
<br />
Clone o projeto

```bash
git clone git@github.com:amandaureliano/financial-application.git
```

Entre no diretório do projeto

```bash
cd financial-application
```

Instale as dependências do projeto

```bash
npm install
```

Crie o arquivo .env que possibilita que sejam adicionadas as variáveis de ambiente do projeto

```bash
cp .env.example .env
```

Rode a imagem do docker

```bash
docker compose up -d
```

Rode as migrações do prisma

```bash
npm run migration:run
```

Rode a aplicação

```bash
npm run dev
```
</details>

<br />

## 📕 **Diagrama Banco de dados**


<details><summary>Clique aqui</summary>
# ![db](./db.svg)
</details>

<br />

## 📘 **Fluxogramas**

<details><summary>Clique aqui</summary>
# ![db](./fluxograma.svg)
</details>

<br />

## 📚 **Funcionalidades**

- [x] Exibir uma homepage pública com uma vitrine de veículos para venda, similar ao exemplo fornecido (não é necessário seguir a risca).
- [x] Ordenar os veículos listados na vitrine por valor.
- [x] Implementar um sistema de autenticação de administrador com token JWT para o cadastro de veículos.
- [x] Garantir que o acesso ao painel administrativo seja seguro e que somente usuários autenticados possam acessar.
- [x] Assegurar que todas as requisições privadas necessitem de um token JWT válido, gerado no login para operação.
- [x] Permitir que o cadastro de veículos inclua funcionalidades de listagem, criação, edição e exclusão de registros.
- [x] Definir que os atributos obrigatórios para os veículos sejam: Id, Nome, Marca, Modelo e Foto.
- [x] Criar uma API Rest para o backend, seguindo as melhores práticas de desenvolvimento.
- [x] Persistir todos os dados dos veículos no banco de dados.

<br />

## 🚀 **Tecnologias**

### As seguintes ferramentas foram usadas na construção do projeto

### [Node.js](https://nodejs.org/)

### [Typescript](https://www.typescriptlang.org/)

### [Fastity](https://fastify.dev/)

### [Prisma](https://www.prisma.io/)

### [Zod](https://zod.dev/)

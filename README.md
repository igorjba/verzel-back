# ✨ **Catálogo de Veículos**

<center>

### [Rodando Localmente](#🏡-rodando-localmente) ▪️ [Documentação da API](#📚-documentação-da-api) ▪️ [Funcionalidades](#📚-funcionalidades) ▪️ [Tecnologias](#🚀-tecnologias)

</center>

## Acesse os Repositórios do Projeto

### [FRONTEND REPOSITORY](https://github.com/igorjba/verzel-front)

### [BACKEND REPOSITORY](https://github.com/igorjba/verzel-back)

<br />

<br />

## 🏡 **Rodando localmente**

### Para rodar o projeto localmente, siga as seguintes instruções

<br />
<details><summary>Ver o passo a passo</summary>
<br />
Clone o projeto

```bash
git clone git@github.com:igorjba/verzel-back.git
```

Entre no diretório do projeto

```bash
cd verzel-back
```

Instale as dependências do projeto

```bash
npm install
```

Crie o arquivo .env para configurar as variáveis de ambiente do projeto

```bash
cp .env.example .env
```

Rode a imagem do Docker

```bash
docker compose up -d
```

Rode as migrações do Prisma

```bash
npx prisma migrate dev
```

Rode a aplicação

```bash
npm run dev
```
</details>

<br />

## 📚 **Funcionalidades**

<details>
<summary><strong>Exibir uma homepage pública com uma vitrine de veículos para venda</strong></summary>
O backend oferece uma API para listar veículos, que pode ser usada para alimentar uma vitrine de veículos no frontend.
</details>
<details>
<summary><strong>Ordenar os veículos listados na vitrine por valor</strong></summary>
A API de listagem de veículos permite a ordenação por valor, facilitando a exibição ordenada no frontend.
</details>
<details>
<summary><strong>Implementar um sistema de autenticação de administrador com token JWT para o cadastro de veículos</strong></summary>
O sistema utiliza JWT para autenticar administradores, permitindo operações de cadastro de veículos.
</details>
<details>
<summary><strong>Garantir que o acesso ao painel administrativo seja seguro e que somente usuários autenticados possam acessar</strong></summary>
A autenticação JWT é usada para garantir que apenas usuários autenticados com as devidas permissões acessem o painel administrativo.
</details>
<details>
<summary><strong>Assegurar que todas as requisições privadas necessitem de um token JWT válido, gerado no login para operação</strong></summary>
Todas as operações privadas, como criação, atualização e exclusão de veículos, requerem um token JWT válido.
</details>
<details>
<summary><strong>Permitir que o cadastro de veículos inclua funcionalidades de listagem, criação, edição e exclusão de registros</strong></summary>
A API fornece endpoints para cada uma dessas operações, permitindo gerenciamento completo dos registros de veículos.
</details>
<details>
<summary><strong>Definir que os atributos obrigatórios para os veículos sejam: Id, Nome, Marca, Modelo e Foto</strong></summary>
O modelo de dados dos veículos inclui esses atributos, conforme definido no schema do Prisma.
</details>
<details>
<summary><strong>Criar uma API Rest para o backend, seguindo as melhores práticas de desenvolvimento</strong></summary>
A API Rest foi desenvolvida usando Fastify, Prisma e outras tecnologias modernas, seguindo boas práticas de desenvolvimento.
</details>
<details>
<summary><strong>Persistir todos os dados dos veículos no banco de dados</strong></summary>
O backend utiliza o Prisma com PostgreSQL para persistir os dados dos veículos.
</details>

<br />


## 📚 **Documentação da API**

A API do Catálogo de Veículos permite gerenciar usuários e veículos, com operações de cadastro, autenticação, criação, atualização e remoção de veículos.

### Endpoints

#### Autenticação

<details>
<summary><strong>Registrar Usuário</strong> (POST /register)</summary>

```bash
POST http://localhost:3333/register
```

**Body:**
```json


{
  "name": "Nome do Usuário",
  "email": "email@dominio.com",
  "password": "senha123",
  "role": "ADMIN"
}
```
</details>

<details>
<summary><strong>Login</strong> (POST /login)</summary>

```bash
POST http://localhost:3333/login
```

**Body:**
```json
{
  "email": "email@dominio.com",
  "password": "senha123"
}
```
</details>

#### Veículos

<details>
<summary><strong>Cadastrar Veículo</strong> (POST /vehicles)</summary>

```bash
POST http://localhost:3333/vehicles
```

**Body:**
```json
{
  "name": "Nome do Veículo",
  "brand": "Marca",
  "model": "Modelo",
  "value": 12345.67,
  "photo": "url_da_foto"
}
```
</details>

<details>
<summary><strong>Atualizar Veículo</strong> (PUT /vehicles/:vehicleId)</summary>

```bash
PUT http://localhost:3333/vehicles/:vehicleId
```

**Body:**
```json
{
  "name": "Novo Nome",
  "brand": "Nova Marca",
  "model": "Novo Modelo",
  "value": 54321.00,
  "photo": "nova_url_da_foto"
}
```
</details>

<details>
<summary><strong>Excluir Veículo</strong> (DELETE /vehicles/:vehicleId)</summary>

```bash
DELETE http://localhost:3333/vehicles/:vehicleId
```

*Não requer body.*
</details>

<details>
<summary><strong>Obter Veículo</strong> (GET /vehicles/:vehicleId)</summary>

```bash
GET http://localhost:3333/vehicles/:vehicleId
```

*Não requer body.*
</details>
<details>
<summary><strong>Listar Veículos</strong> (GET /vehicles)</summary>

<details>
<summary><strong>Sem parâmetros</strong></summary>

```bash
GET http://localhost:3333/vehicles
```

**Descrição:** Lista os primeiros 10 veículos (padrão de paginação).

*Não requer body.*

*Query Parameters (opcionais):* `page`, `limit`, `search`.

</details>

<details>
<summary><strong>Com parâmetros</strong></summary>

```bash
GET http://localhost:3333/vehicles?page=2&limit=5&search=Ford
```

**Descrição:** Exemplo com filtros e paginação. 

- `page=2`: Retorna a segunda página de resultados.
- `limit=5`: Limita a resposta a 5 veículos por página.
- `search=Ford`: Filtra os veículos para mostrar apenas aqueles da marca "Ford".

*Não requer body.*

</details>
</details>


<br />

## 🚀 **Tecnologias**

### As seguintes ferramentas foram usadas na construção do projeto (back-end)

### [Node.js](https://nodejs.org/)

### [Typescript](https://www.typescriptlang.org/)

### [Fastify](https://fastify.dev/)

### [Prisma](https://www.prisma.io/)

### [Zod](https://zod.dev/)
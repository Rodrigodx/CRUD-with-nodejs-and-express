# API REST de Gerenciamento de Usuários - Connect API

API RESTful para gerenciamento completo de usuários (CRUD), desenvolvida como projeto acadêmico/MVP para ambiente corporativo. A aplicação adota uma arquitetura em camadas desacopladas (**Controller**, **Service**, **Repository**), garantindo facilidade de manutenção, desacoplamento e regras de negócio isoladas.

---

## 🚀 Tecnologias Utilizadas

* **Node.js**: Ambiente de execução JavaScript no servidor.
* **Express**: Framework web minimalista para gerenciamento de rotas e middlewares HTTP.
* **PostgreSQL**: Sistema gerenciador de banco de dados relacional (SGBD).
* **`pg` (node-postgres)**: Driver de conexão oficial entre Node.js e PostgreSQL.
* **`dotenv`**: Gerenciamento de variáveis de ambiente e segurança de credenciais.

---

## 📁 Estrutura do Projeto

```text
Atividade 2 - Faculdade/
├── .env
├── package.json
├── index.js
└── src/
    ├── config/
    │   └── database.js
    ├── controllers/
    │   └── userController.js
    ├── services/
    │   └── userService.js
    ├── repositories/
    │   └── userRepository.js
    └── routes/
        └── userRoutes.js
```
---

## ⚙️ Passo a Passo para Execução Local

**1. Pré-requisitos**
   
* Node.js (v18 ou superior)

* PostgreSQL instalado e rodando

* Gerenciador de pacotes NPM
  
---

**2. Clocar o Repositório**

* git clone (https://github.com/Rodrigodx/CRUD-with-nodejs-and-express)
* cd CRUD-with-nodejs-and-express
  
---

**3. Instalar as Dependências**

* npm install

  ---

**4. Configurar as Variáveis de Ambiente**

* Crie um arquivo .env na raiz do projeto seguindo o modelo:
```
PORT=3000
DB_USER=postgres
DB_PASSWORD=sua_senha
DB_HOST=localhost
DB_PORT=5432
DB_NAME=postgres
```
---

**5. Criar a Tabela no Banco de Dados**
* Conecte-se ao seu PostgreSQL e execute o comando SQL para criar a tabela users:

```
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    idade INT NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);
```
---

**6. Iniciar a Aplicação**

* node index.js
* A API estará acessível em: http://localhost:3000

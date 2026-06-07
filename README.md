# DT Money

Projeto fullstack para controle financeiro pessoal, composto por um aplicativo mobile em **Expo/React Native** e uma API backend em **Node.js/Fastify**.

O objetivo da aplicação é permitir que o usuário realize autenticação, cadastre transações financeiras, consulte categorias e acompanhe seus lançamentos de entrada e saída.

---

## Visão geral

Este repositório possui duas aplicações principais:

```txt
dt-money/
├── app/       # Aplicativo mobile em Expo/React Native
└── backend/   # API backend em Node.js/Fastify
```

---

## Tecnologias utilizadas

### Aplicativo mobile

- Expo
- React Native
- TypeScript
- React Navigation
- React Hook Form
- Yup
- Axios
- NativeWind/Tailwind CSS
- Async Storage
- DateTime Picker
- Bottom Sheet

### Backend

- Node.js
- TypeScript
- Fastify
- TypeORM
- SQLite
- JWT
- Bcrypt
- Zod
- Swagger

---

## Pré-requisitos

Antes de executar o projeto, tenha instalado na máquina:

- Node.js
- npm
- Expo CLI, caso prefira executar comandos Expo globalmente
- Android Studio e emulador Android, ou dispositivo físico com Expo/ambiente configurado
- Git

---

## Como clonar o projeto

```bash
git clone https://github.com/lucianoosouza/dt-money.git
cd dt-money
```

---

## Configuração do backend

Entre na pasta da API:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` na raiz da pasta `backend` com a chave da aplicação:

```env
APP_SECRET_KEY=sua_chave_secreta_aqui
```

Execute as migrations do banco de dados:

```bash
npm run migration:run
```

Inicie a API em modo desenvolvimento:

```bash
npm run dev
```

A API será executada em:

```txt
http://localhost:3001
```

A documentação Swagger estará disponível em:

```txt
http://localhost:3001/docs
```

---

## Scripts do backend

Dentro da pasta `backend`, os principais comandos são:

```bash
npm run dev              # Inicia a API em modo desenvolvimento
npm run start            # Executa a aplicação via ts-node
npm run migration:run    # Executa as migrations do TypeORM
npm run migration:revert # Reverte a última migration executada
```

---

## Rotas principais da API

### Autenticação

```txt
POST /auth/register  # Cadastro de usuário
POST /auth/login     # Login do usuário
```

### Transações

As rotas de transação exigem autenticação via token JWT no cabeçalho:

```txt
Authorization: Bearer seu_token_jwt
```

```txt
GET    /transaction/categories # Lista categorias de transações
GET    /transaction            # Lista transações
POST   /transaction            # Cria uma nova transação
PUT    /transaction            # Atualiza uma transação
DELETE /transaction/:id        # Remove uma transação
```

---

## Configuração do aplicativo mobile

Em outro terminal, acesse a pasta do aplicativo:

```bash
cd app
```

Instale as dependências:

```bash
npm install
```

Inicie o Expo:

```bash
npm run start
```

Para executar diretamente no Android:

```bash
npm run android
```

Para executar no iOS:

```bash
npm run ios
```

Para executar na web:

```bash
npm run web
```

---

## Comunicação entre app e backend

O aplicativo mobile está configurado para consumir a API conforme a plataforma:

```txt
iOS:     http://localhost:3001
Android: http://10.0.2.2:3001
```

No emulador Android, `10.0.2.2` representa o `localhost` da máquina onde o backend está rodando.

---

## Fluxo básico para executar o projeto completo

1. Clone o repositório.
2. Instale as dependências do backend.
3. Configure o arquivo `.env` com `APP_SECRET_KEY`.
4. Execute as migrations do backend.
5. Inicie a API na porta `3001`.
6. Instale as dependências do app.
7. Inicie o Expo.
8. Abra o app no emulador ou dispositivo físico.

---

## Observações importantes

- O backend utiliza SQLite como banco de dados local.
- A API precisa estar ativa antes de usar as funcionalidades autenticadas do aplicativo.
- As rotas de transação dependem do token JWT retornado no login.
- Em Android Emulator, mantenha o backend rodando localmente e use a URL `http://10.0.2.2:3001`.
- A documentação da API pode ser consultada pelo Swagger em `/docs`.

---

## Estrutura resumida

```txt
app/
├── assets/
├── src/
│   ├── components/
│   ├── context/
│   ├── routes/
│   ├── screens/
│   ├── shared/
│   └── styles/
└── package.json

backend/
├── src/
│   ├── infra/
│   │   ├── database/
│   │   └── web/
│   └── server.ts
└── package.json
```

---

## Autor

Desenvolvido por Luciano de Oliveira Souza.

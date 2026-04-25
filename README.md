Aplicação full stack simples para gerenciamento de lista de compras, com CRUD completo e interface web.

---

## 🚀 Tecnologias usadas

### Backend
Node.js, Express, MongoDB, Mongoose, CORS, dotenv

### Frontend
HTML, CSS, JavaScript (Vanilla), Service Worker (PWA básico)

---

## 📁 Estrutura do projeto

app-pet/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── index.html
│   ├── app.js
│   ├── style.css
│   ├── manifest.json
│   └── service-worker.js

---

## ⚙️ Como rodar o projeto

### 1. Clonar o repositório
git clone <url-do-repositorio>
cd app-pet/backend

---

### 2. Instalar dependências
npm install

---

### 3. Criar arquivo .env
MONGO_URI=sua_string_do_mongodb
PORT=3000

---

### 4. Rodar o backend
npm run dev

Servidor:
http://localhost:3000

---

## 🌐 Frontend

Abrir:
frontend/index.html

ou usar Live Server no VS Code.

---

## 🔌 API

GET    /api/items → lista itens  
GET    /api/items/:id → item por ID  
POST   /api/items → cria item  
PUT    /api/items/:id → atualiza item  
DELETE /api/items/:id → remove item  

---

## 🧠 Funcionalidades

- Adicionar itens
- Listar itens
- Marcar como comprado
- Remover itens
- Interface simples e responsiva

# Kanban Board App (Full-Stack)

Полноценное фуллстек-приложение для управления задачами (Kanban-доска) с REST API, авторизацией и базой данных MongoDB.

## 🚀 Live Demo

- **Frontend (Vercel):** [https://backend-kanban-xi.vercel.app](https://backend-kanban-xi.vercel.app)
- **Backend API (Render):** [https://backend-kanban-ik2i.onrender.com](https://backend-kanban-ik2i.onrender.com)
- **Database:** MongoDB Atlas

## 🛠 Tech Stack

### Frontend (Client)
- **TypeScript** — типизация
- **React** — UI
- **React Router** — маршрутизация
- **Axios** — HTTP-клиент
- **Create React App** — сборка

### Backend (Server)
- **Node.js + Express** — сервер
- **MongoDB + Mongoose** — БД и ODM
- **JWT** — аутентификация
- **bcrypt** — хеширование паролей
- **dotenv** — переменные окружения

## 📦 Установка локально

```bash
# Клонировать репозиторий
git clone https://github.com/SergeyGetman/backend-kanban.git
cd backend-kanban

# Сервер
cd server
npm install
# Создать server/config/.env (см. ниже)
npm start

# Клиент (в отдельном терминале)
cd ../client
npm install
npm start
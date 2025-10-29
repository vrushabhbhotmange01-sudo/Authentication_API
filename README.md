# 🔐 Authentication API

A secure RESTful API built with **Node.js**, **Express**, and **MongoDB**, providing user registration, login, and protected routes using **JWT authentication** and **bcrypt password hashing**.

---

⚙️ Tech Stack

Backend: Node.js, Express.js
Database: MongoDB (Mongoose ODM)
Authentication: JWT (jsonwebtoken), bcrypt
Environment Management: dotenv
API Testing: Postman
---

## 🚀 Live Demo
🔗 [Live API](https://authentication-api-b4jt.onrender.com)

🧪 [Postman Collection](https://vrushabhbhotmange01-5159632.postman.co/workspace/Vrushabh-Bhotmange's-Workspace~af3d36d0-36b4-4bf2-8033-3f2374248426/request/49645752-ca19a95a-af06-4ea5-9fa5-db35915c88ea?action=share&creator=49645752)

---

## 🧱 Features
- User registration and login  
- Encrypted password storage  
- JWT-based authentication and authorization  
- Middleware for route protection  
- Clean and modular code structure  

---

## 📚 Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/api/users/register` | Register new user |
| POST | `/api/users/login` | Login user |


---

## 🧩 Folder Structure

/config         → Database connection
/models         → Mongoose schemas
/routes         → Route definitions
/middleware     → Auth middlewares
server.js       → Entry point



---

## 🧰 How to Run Locally
```bash
git clone https://github.com/yourusername/authentication-api.git
cd authentication-api
npm install
npm start

Create .env:
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret
PORT=5000


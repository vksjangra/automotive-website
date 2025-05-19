
## 🛠️ Setup Instructions

### 1️⃣ Clone the Repo

git clone https://github.com/vksjangra/automotive-website.git
cd automotive-website
cd backend
npm install

create config.env file with:
ATLAS_URI=mongodb+srv://vikasjangraa:<password>@emailflowcluster.1rjtnpx.mongodb.net/?retryWrites=true&w=majority&appName=automotive
PORT=3000
SECRET_KEY=

run backend server with:
node server.js

cd ../frontend
npm install

create .env file with:
VITE_BACKEND_BASE_URL=http://localhost
VITE_BACKEND_PORT=3000

run with:
npm run dev

# 🚗 Automotive Dealership Website

A responsive, full-stack web application for an automotive dealership.

---

- Vehicle browsing
- Login/registration
- Inquiry/contact system

---

## 🧰 Tech Stack

### 🔙 Backend
- Node.js + Express
- MongoDB (Mongoose ODM)
- JSON Web Tokens (JWT) for auth

### 🔜 Frontend
- React (with Tailwind CSS)
- React Modal
- Axios for HTTP requests

---

## 🚀 Core Features Implemented

### 🔐 User Experience
- User login and registration
- JWT-based session management

### 🚘 Vehicle Browsing
- Browse all available vehicles

### 💬 Inquiries
- Anyone can send inquiries on vehicle listings
- Inquiries are visible to users who posted the listings

---

## 🖼️ Design Implementation

- Tailwind CSS used for rapid UI development

---
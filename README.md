# 💬 QuickChat - Real-time Chat Application

**QuickChat** is a full-stack real-time messaging platform built using the **MERN (MongoDB, Express, React, Node.js)** stack. It allows users to engage in **one-to-one live conversations**, manage their profiles, view online users, and personalize their chat experience with **multiple display themes**.

---

## 📚 Table of Contents

- Project Overview
- Features
- Installation
- Usage
- Future Enhancements
- Technologies Used
- Screenshots

---

## 📌 Project Overview

The main goal of QuickChat is to deliver a seamless, responsive, and real-time chat experience. The system handles user signups and logins securely, displays all users and their online status, supports real-time communication using **Socket.io**, and offers **theme customization** for user preferences.

---

## 🚀 Features

1. Authentication
   - Secure user Sign Up / Login with JWT.
   - Persistent login sessions with token storage.

2. Chat System
   - Real-time one-to-one chat using Socket.io.
   - Instant message updates, and user status display.

3. User Management
   - View list of all users.
   - See who is currently online.

4. Theme Switching
   - Choose from multiple UI themes to personalize the chat experience.

5. Profile Customization
   - Update profile details including display name and avatar.

---

## ⚙️ Installation

### Backend Setup

1. Clone the repository and navigate to the server:
   git clone https://github.com/njnr14/QuickChat.git
   cd QuickChat/server

2. Install dependencies:
   npm install

3. Create a .env file in the server folder and add the following:
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret

4. Start the backend server:
   npm start

   The backend server will run on: http://localhost:5000

---

### Frontend Setup

1. Open a new terminal and navigate to the frontend:
   cd ../client

2. Install dependencies:
   npm install

3. Start the development server:
   npm run dev

   The frontend will run on: http://localhost:5173

---

## 🧪 Usage

- Sign up/Login to the application.
- View all users and filter online users.
- Click on a user to start a real-time one-to-one chat.
- Change theme from the settings section.
- Update your profile information anytime.

---

## 📈 Future Enhancements

- Group chat support.
- Push notifications for new messages.
- Emoji reactions and message editing.
- Chat history persistence and search.

---

## 🛠️ Technologies Used

Frontend: React, Tailwind CSS, Lucide React, Socket.io-client  
Backend: Node.js, Express.js, Socket.io  
Database: MongoDB, Mongoose  
Auth: JSON Web Token (JWT)  
Tools: Vite, dotenv, Postman , Cloudinary

---

## 🖼️ Screenshots



![login](https://github.com/user-attachments/assets/fbe9515e-7b36-47cb-8b6f-fc92e8f84b07)
![home](https://github.com/user-attachments/assets/f376f925-d3b9-43b4-99be-1761f38d9443)
![image](https://github.com/user-attachments/assets/a29bc734-8050-4b30-9937-6615e1194f91)
![theme](https://github.com/user-attachments/assets/b6fe58f6-cab9-4716-b755-268760115987)
![image](https://github.com/user-attachments/assets/8b3883ce-0f48-4b35-84f5-4017de9f07b1)
![image](https://github.com/user-attachments/assets/c5a6f1ea-77ed-4aaf-8bb8-7ba1796de33d)


---


"QuickChat – Real-time conversations, redefined."

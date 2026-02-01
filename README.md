📝 Task Manager - MERN Stack

A modern, full-stack Task Management application built with React 19, Node.js, and MongoDB. This project features a responsive UI, real-time CRUD operations, and status tracking for efficient task management.

🚀 Features

Full CRUD Operations: Create, Read, Update, and Delete tasks.

Status Management: Toggle tasks between Pending, In Progress, and Completed.

Responsive Design: Fully optimized for mobile, tablet, and desktop views.

Clean UI: Built with custom CSS variables and Inter font for a professional look.

Smooth UX: Includes smooth scrolling when editing and interactive button states.

🛠️ Tech Stack

Frontend

React 19: Modern UI library.

Vite: Ultra-fast frontend build tool.

Axios: For handling asynchronous API requests.

CSS3: Custom styles with a focus on modern UI/UX principles.

Backend

Node.js & Express: Scalable backend server architecture.

MongoDB Atlas: Cloud-hosted NoSQL database.

Mongoose: Elegant MongoDB object modeling for Node.js.

CORS: Middleware for enabling cross-origin resource sharing.

📂 Project Structure

├── server/             # Backend (Node/Express)
│   ├── models/        # Mongoose Schema
│   ├── routes/        # API Endpoints
│   ├── server.js      # Main entry point
│   └── vercel.json    # Vercel Serverless config
├── src/               # Frontend (React)
│   ├── components/    # Reusable UI components
│   ├── App.jsx        # Main application logic
│   └── App.css        # Stylesheet
└── index.html         # Frontend entry point


⚙️ Installation & Setup

1. Prerequisites

Node.js (v18+)

MongoDB Atlas account

2. Backend Setup

Navigate to the server folder:

cd server


Install dependencies:

npm install


Create a .env file in the server directory:

MONGO_URI=your_mongodb_connection_string
PORT=5000


Start the server:

npm start


3. Frontend Setup

Navigate to the root directory:

npm install


Start the development server:

npm run dev


🌐 Deployment (Vercel)

1. Backend Deployment

Ensure the server/vercel.json is correctly configured (already included in this repo). When deploying the backend to Vercel, set your MONGO_URI in the Vercel Project Settings.

2. Frontend Deployment

To fix Axios Network Errors in production, do not hardcode localhost.

Update src/App.jsx:

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/tasks";


In the Vercel Dashboard for your frontend project, add an Environment Variable:

Key: VITE_API_URL

Value: https://your-backend-url.vercel.app/api/tasks

3. Fix 404 Favicon Errors

If you see 404 /favicon.ico in your logs, ensure you have a public folder at the root of the project:

root/
├── public/
│   └── favicon.ico
└── index.html


📡 API Endpoints

Method

Endpoint

Description

GET

/api/tasks

Fetch all tasks

POST

/api/tasks

Create a new task

PUT

/api/tasks/:id

Update task content or status

DELETE

/api/tasks/:id

Remove a task

🤝 Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

📄 License

This project is licensed under the ISC License.
# Job Portal Web Application

A full-stack Job Portal Web Application built using MERN Stack technologies with MySQL database integration. The application allows recruiters to post jobs and students/job seekers to apply for jobs online.

---

# Features

## Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes

## Recruiter Features
- Add Job
- View Posted Jobs
- Manage Applications

## Student Features
- View Available Jobs
- Apply for Jobs
- Application Tracking

## Backend Features
- REST API Integration
- MySQL Database
- Secure Password Hashing
- Middleware Authentication

---

# Tech Stack

## Frontend
- React.js
- React Router DOM
- Axios
- CSS

## Backend
- Node.js
- Express.js

## Database
- MySQL

## Authentication
- JWT (JSON Web Token)
- bcryptjs

---

# Project Structure

```text
job-portal/
│
├── backend/
│   ├── config/
│   ├── middleware/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── App.js
│   │   └── index.js
│   │
│   └── package.json
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/job-portal-web-app.git
```

---

# Backend Setup

## Go to backend folder

```bash
cd backend
```

## Install Dependencies

```bash
npm install
```

## Create .env File

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=jobportal

JWT_SECRET=mysecretkey
```

## Run Backend

```bash
npm run dev
```

---

# Frontend Setup

## Go to frontend folder

```bash
cd frontend
```

## Install Dependencies

```bash
npm install
```

## Run Frontend

```bash
npm start
```

---

# MySQL Database Setup

## Create Database

```sql
CREATE DATABASE jobportal;
```

## Create Users Table

```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    role ENUM('student','recruiter','admin') DEFAULT 'student'
);
```

## Create Jobs Table

```sql
CREATE TABLE jobs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    company VARCHAR(255),
    location VARCHAR(255),
    salary VARCHAR(100),
    description TEXT,
    recruiter_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Create Applications Table

```sql
CREATE TABLE applications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    job_id INT,
    status VARCHAR(50) DEFAULT 'Pending',
    applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

# API Endpoints

## Authentication

### Register User

```http
POST /api/auth/register
```

### Login User

```http
POST /api/auth/login
```

---

## Jobs

### Add Job

```http
POST /api/jobs
```

### Get All Jobs

```http
GET /api/jobs
```

---

## Applications

### Apply Job

```http
POST /api/applications
```

### Get Applications

```http
GET /api/applications
```

---

# Future Enhancements

- Resume Upload
- AI Resume Analyzer
- AI Job Recommendation
- Search & Filters
- Admin Dashboard
- Email Notifications
- Dark Mode
- Deployment

---

# Screenshots

Add your project screenshots here.

---

# Author

Pallavi Narsinge

---

# License

This project is licensed under the MIT License.
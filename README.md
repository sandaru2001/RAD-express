# Crop Management System 🌵

## Overview
The Crop Management System is a web application designed to help users manage crops, fields, and related resources efficiently. It consists of a **frontend** built with React, Redux, Redux Thunk, and JWT authentication, and a **backend** powered by Express, Prisma, and MySQL.

## Features
### Frontend
- Built with **React** and **Tailwind CSS** for a modern UI.
- **Redux** for state management.
- **Redux Thunk** for handling asynchronous API calls.
- **JWT Authentication** for user login and authorization.
- Dynamic forms for adding, updating, and deleting crops, fields, and related data.
- Responsive design for mobile and desktop users.

### Backend
- **Express.js** for building RESTful APIs.
- **Prisma ORM** for database management with MySQL.
- **JWT Authentication** for secure user sessions.
- CRUD operations for managing crops, fields, and related entities.
- API endpoints for handling user authentication and data management.

## Installation
### Prerequisites
Ensure you have the following installed:
- **Node.js** (Latest LTS version)
- **MySQL** (Running instance for database)
- **Git** (For cloning the repository)

### Setup
#### 1. Clone the repository
```sh
[git clone https://github.com/your-username/crop-management-system.git](https://github.com/Thisura2001/GreenShadow-React.git)
cd crop-management-system
```

### Frontend Setup
```sh
cd frontend
npm install
```
#### Start the React App
```sh
npm start
```

### Backend Setup
```sh
cd backend
npm install
```
#### Set up the database
1. Configure `.env` file in the backend directory:
```env
DATABASE_URL="mysql://user:password@localhost:3306/greenShadowNode"
JWT_SECRET="your_secret_key"
```
2. Run Prisma migrations:
```sh
npx prisma migrate dev --name init
```
#### Start the Express Server
```sh
npm start
```

## API Endpoints
### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and receive a JWT token

### Crop Management
- `GET /api/crops` - Get all crops
- `POST /api/crops` - Add a new crop
- `PUT /api/crops/:id` - Update a crop
- `DELETE /api/crops/:id` - Delete a crop

### Field Management
- `GET /api/fields` - Get all fields
- `POST /api/fields` - Add a new field
- `PUT /api/fields/:id` - Update a field
- `DELETE /api/fields/:id` - Delete a field

## Usage
1. Start the backend server.
2. Start the frontend application.
3. Register an account and log in.
4. Manage crops and fields from the dashboard.

## Technologies Used
- **Frontend**: React, Redux, Redux Thunk, Tailwind CSS, JWT
- **Backend**: Express.js, Prisma ORM, MySQL, JWT

## License
This project is licensed under the MIT License.

## Author
Developed by Thisura Liyanage.


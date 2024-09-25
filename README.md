# User-Address-Manager

# User Address Backend

This project is a simple backend built using **Node.js** and **MySQL** that allows users to register with their name and multiple addresses. The system stores the user's name in a `User` table and the associated addresses in an `Address` table. It demonstrates a **one-to-many** relationship where a user can have multiple addresses.

## Project Features

- **One-to-many relationship** between `User` and `Address`
- **Node.js** with **Express** framework for building APIs
- **MySQL** database used with **Sequelize ORM** for database interaction
- **REST API** to handle user registration with addresses
- A simple `POST` request to save user and address information

## Project Structure

user-address-backend/
│
├── config/
│   └── database.js
├── models/
│   ├── user.js
│   └── address.js
├── migrations/
├── index.js
└── package.json

### Technologies Used

- **Node.js**: JavaScript runtime for the server
- **Express**: Web framework for Node.js
- **Sequelize**: ORM for managing MySQL database
- **MySQL**: Relational database used for storing user and address information
- **body-parser**: Middleware to parse incoming request bodies

- 

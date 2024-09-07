# Express.js Authentication API with JWT
This repository contains a simple Express.js application that handles user signup and signin functionality, secured with JSON Web Tokens (JWT). <br/> It includes the following endpoints:

POST /signup: Register a new user.<br/> 
POST /signin: Authenticate a user and return a JWT token.<br/> 
GET /me: Retrieve the authenticated user's details using a valid JWT.<br/> 
# Features
## User registration and authentication
Password is stored in plain text (this is for demonstration purposes only; do not store passwords in plain text in production)<br/> 
Token-based authentication using JWT<br/> 
Basic Express.js routes with in-memory user storage<br/> 
# Technologies Used
Node.js with Express.js for building the server<br/> 
jsonwebtoken for generating and verifying JWTs<br/> 
# Prerequisites
Before running the project, ensure that you have the following installed:<br/> 

Node.js (v14 or later)<br/> 
npm (v6 or later)<br/> 

# Project Setup Instructions

## Prerequisites

- Node.js installed
- MongoDB Atlas account

## Steps to Run the Application

1. **Clone the Repository**
   git remote add origin https://github.com/ManishYadav11/twitter-clone.git
4 .Open in Code Editor
   1. Open the project directory in your preferred code editor (e.g., VSCode).
   2. Split the Terminal
   3. In your code editor, open a terminal.
      Split the terminal into two panes if your editor supports it (e.g., in VSCode, click on the split terminal button).
      Navigate to Frontend and Backend Directories
   4. Install Dependencies
      
5.In both terminal panes, run npm start to start the front-end and back-end servers:
      This will start your front-end server on http://localhost:3000 and the back-end server as . http://localhost:5000
      Open Browser and Go to localhost:3000

USE POSTMAN OR THUNDERCLIENT OR ELSE TO TEST DIFFERENT ROUTES : 
               FOR LOGIN :  http://localhost:5000/login
               FOR SIGNUP : http://localhost:5000/signup
               FOR PROFILE : http://localhost:5000/profile
               FOR LOGOUT : http://localhost:5000/logout
               FOR CRAETING TWEET : http://localhost:5000/user/tweet
               FOR DELETING TWEET : http://localhost:5000/user/delete/:id  

***    IMPORTANT NOTE   *** 
1.Add Your IP to MongoDB Atlas
2.Ensure your IP address is whitelisted in MongoDB Atlas for a successful connection to the database. To do this:
3.Log in to your MongoDB Atlas account.
4.Go to the "Network Access" section.
5.Click "Add IP Address" and add your current IP address or allow access from anywhere (0.0.0.0/0) if you're in a development environment.
Environment Variables
Make sure your environment variables are set up correctly. You will likely need a .env file in your backend directory with at least the following variables:

.env
MONGODB_URI=your_mongodb_atlas_connection_string
PORT=CHECK for Configure PORT

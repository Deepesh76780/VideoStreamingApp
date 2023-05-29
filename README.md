# Video Stream App

This is a video streaming application built with React as the frontend, Node.js as the backend, and Firebase for storage and authentication. The application allows users to upload, stream, and manage videos.

## Features

- User registration and authentication using Firebase
- Upload videos to Firebase storage
- Stream videos using HTML5 video player
- User-friendly interface
- Responsive design for different screen sizes

## Technologies Used

- React
- Node.js
- Firebase (Authentication, Storage)

## Prerequisites

- Node.js (version X.X.X)
- Firebase account and project setup
- Firebase SDK credentials

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Deepesh76780/VideoStreamingApp.git

2. Navigate to the project directory:

   ```bash
   cd VideoStreamingApp
   
3. Install the dependencies for the frontend:

   ```bash
   cd client
   npm install

4. Configure Firebase credentials:

   - Create a `.env` file in the `client` directory.
   - Add your Firebase project credentials in the `.env` file. Example:

     ```plaintext
     REACT_APP_FIREBASE_API_KEY=your-api-key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
     REACT_APP_FIREBASE_PROJECT_ID=your-project-id
     ```

5. Install the dependencies for the backend:

   ```bash
   cd ../server
   npm install
   
6. Configure Firebase credentials for the backend:

   - Create a `.env` file in the `server` directory.
   - Add your Firebase project credentials in the `.env` file. Example:

     ```plaintext
     FIREBASE_API_KEY=your-api-key
     FIREBASE_AUTH_DOMAIN=your-auth-domain
     FIREBASE_PROJECT_ID=your-project-id
     ```

7. Start the frontend and backend servers:

   ```bash
   # In the client directory
   npm start

   # In the server directory
   npm start
   
8. Access the application in your web browser at `http://localhost:3000`.

    
  
 

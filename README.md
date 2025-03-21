# 📦 VideoStreamingApp

![React](https://img.shields.io/badge/React-18.2.0-blue?style=flat-square&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-14.x-green?style=flat-square&logo=nodedotjs)
![Firebase](https://img.shields.io/badge/Firebase-9.17.2-yellow?style=flat-square&logo=firebase)

## Project Overview
VideoStreamingApp is a robust video streaming application designed to facilitate the uploading, management, and streaming of videos in a user-friendly environment. Built using React for the frontend and Node.js for the backend, this application leverages Firebase for secure storage and authentication services.

The architecture follows a client-server model where:
- **Frontend**: Developed with React, it handles user interactions and UI rendering.
- **Backend**: Built on Node.js with Express, it manages API requests and communicates with the Firebase database for data operations.

## 🌟 Features
- User authentication through email and password.
- Ability to upload videos along with metadata (title, description).
- Video streaming capabilities with support for various formats.
- Commenting functionality on videos to enhance user interaction.
- Responsive design ensuring usability across devices.

## API Endpoints
| Method | Endpoint             | Description                     |
|--------|----------------------|---------------------------------|
| POST   | /api/auth/signup     | Create a new user account       |
| POST   | /api/auth/login      | Authenticate existing users     |
| POST   | /api/videos/upload   | Upload a new video              |
| GET    | /api/videos          | Retrieve list of uploaded videos |
| GET    | /api/videos/:id      | Get details of a specific video  |

## Installation

### Prerequisites
Ensure you have the following installed:
1. Node.js (14.x or higher recommended)
2. npm or yarn

### Client Setup
1. Navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install # or yarn install 
   ```

### Server Setup
1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install # or yarn install 
   ```

## Usage

### Running the Client Application  
Start the React app from the `client` directory:
```bash    
npm start # or yarn start 
```

### Running the Server Application  
Open another terminal, navigate to the `server` directory, and start your Node.js server:
```bash    
npm start # or yarn start 
```

Your application should now be running at `http://localhost:3000` for the client and `http://localhost:8801/api/` for API access.

## Project Structure Overview

```
/
├── .gitignore              
├── README.md               
├── client/                 
│   ├── README.md           
│   ├── package-lock.json   
│   ├── package.json        
│   ├── public/             
│   │   └── index.html      
│   └── src/                
│       ├── App.css         
│       ├── App.js          
│       └── ...             
└── server/                 
    ├── controllers/        
    ├── models/             
    └── routes/             
```

## Development and Deployment

For development purposes, clone this repository and set up both client and server as described above.

### Environment Variables Setup
Create a `.env` file in both `client` and `server` directories containing necessary configurations such as:

**Client**
```
REACT_APP_API_URL=http://localhost:8801/api/
```

**Server**
```
DB_CONNECTION_STRING=<your_database_connection_string>
JWT_SECRET=<your_jwt_secret>
```

### Deployment Instructions  
To deploy this application on platforms like Heroku or Vercel, ensure that build scripts are configured properly in each section (client/server) before pushing your changes.

## License  
This project does not have a license specified.

Version: 1  
Last updated: 2025-03-21T05:48:53.349Z
# 📦 VideoStreamingApp

![React](https://img.shields.io/badge/React-18.2.0-blue?style=flat-square&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-v14.x-green?style=flat-square&logo=nodedotjs)
![Firebase](https://img.shields.io/badge/Firebase-v9.17.2-orange?style=flat-square&logo=firebase)

## Project Overview
VideoStreamingApp is a sophisticated video streaming application designed to provide users with an intuitive platform for uploading, streaming, and managing videos. The architecture consists of a React frontend communicating with a Node.js backend, while Firebase handles user authentication and video storage.

### Architecture and Main Components
- **Frontend:** Developed using React, it provides a dynamic user interface that leverages Redux for state management and Material UI for responsive design.
- **Backend:** Implemented in Node.js, it serves as the API provider for the frontend and manages interactions with the MongoDB database.
- **Database:** MongoDB is utilized to store user data and video information securely.
- **Authentication & Storage:** Firebase is leveraged for user authentication and storing videos.

## 🌟 Features
- User-friendly interface for seamless video uploads and streaming.
- Authentication via Firebase ensuring secure access on signup and login.
- Ability to comment on videos in real-time.
- Responsive design using Material UI components, enhancing usability across devices.
- Recommendation system based on user activity.

## Core Sections

### API Endpoints
| Method | Endpoint              | Description                       |
|--------|-----------------------|-----------------------------------|
| POST   | /api/auth/signup      | Register a new user               |
| POST   | /api/auth/login       | Authenticate a user               |
| GET    | /api/videos           | Retrieve list of uploaded videos   |
| POST   | /api/videos/upload    | Upload a new video                |
| GET    | /api/comments/:videoId| Get comments for a specific video  |

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/VideoStreamingApp.git
   cd VideoStreamingApp
   ```

2. Install dependencies:
   ```bash
   # Client-side dependencies
   cd client 
   npm install
   
   # Server-side dependencies
   cd ../server 
   npm install
   ```

3. Set up your environment variables:
Create a `.env` file in the `server` directory:
```plaintext
DB_URI=your_mongodb_uri_here
FIREBASE_API_KEY=your_firebase_api_key_here
```

4. Start the servers:
In one terminal window run:
```bash
cd server 
npm start 
```
In another terminal window run:
```bash
cd client 
npm start 
```

### Usage Instructions

After starting both servers, navigate to `http://localhost:3000` in your web browser to access the application.

### Project Structure Overview

```
📁 //
  📄 .gitignore           
  📄 README.md            
  📁 client/
    📄 package.json       
    📁 public/
      📄 favicon.ico       
      📄 index.html       
      📄 logo192.png      
      🖼️ logo512.png      
      📄 manifest.json     
      🕵️ robots.txt        
    📁 src/
      📄 App.css          
      📄 App.js           
      …                   
  📁 server/
    📁 controllers/
      📄 auth.js         
      ...                
    🎭 routes/
      📄 auth.js         
```

## Development and Deployment

### Development Tips

For efficient development, ensure you have Nodemon installed globally:
```bash
npm install -g nodemon
```
Use this command to run the server during development for auto-reloading on changes.

### Deployment Instructions

To deploy this application, consider using platforms like Heroku or Vercel for hosting both frontend and backend:

1. Build the client before deploying:
   ```bash
   cd client 
   npm run build 
   ```

2. Deploy using preferred methods specific to your hosting service.

## License Information

This project does not currently have an assigned license.

## Release Notes

**Version:** 1  
**Release Date:** March 21, 2025  

**New Features:**
- Enhanced UI components for better responsiveness.
  
**Improvements:**
- Optimized API endpoints for improved performance.

Last updated: 2025-03-21T09:51:50.291Z
# URL Shortener API

A simple URL shortener application with a RESTful API backend and a React frontend. This project allows users to shorten long URLs and redirect to the original URLs using the generated short links.

## Technologies Used

- **Backend:** Node.js, Express.js, MongoDB (with Mongoose)
- **Frontend:** React, Vite
- **Other:** Axios (for HTTP requests), dotenv (for environment variables)

## Project Structure

```
url-shortener-api/
├── client/           # React frontend (Vite)
│   ├── src/
│   ├── public/
│   ├── ...
├── controllers/      # Express controllers
├── models/           # Mongoose models
├── routes/           # Express routes
├── server.js         # Express server entry point
├── package.json      # Backend dependencies
└── ...
```

## Getting Started (Local Setup)

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn
- MongoDB (local or cloud instance)

### 1. Clone the Repository
```sh
git clone <repo-url>
cd url-shortener-api
```

### 2. Backend Setup
1. Install dependencies:
   ```sh
   npm install
   ```
2. Create a `.env` file in the root directory and add your MongoDB URI:
   ```env
   MONGODB_URI=<your-mongodb-uri>
   PORT=5000
   ```
3. Start the backend server:
   ```sh
   npm start
   ```
   The server will run on `http://localhost:5000` by default.

### 3. Frontend Setup
1. Go to the client directory:
   ```sh
   cd client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the `client` directory and set the API base URL:
   ```env
   VITE_API_BASE_URL=http://localhost:5000
   ```
4. Start the frontend development server:
   ```sh
   npm run dev
   ```
   The app will run on `http://localhost:5173` by default.

## Usage
- Open the frontend in your browser and use the form to shorten URLs.
- Accessing a short URL will redirect you to the original URL.

## Deployment
- The backend and frontend can be deployed separately (e.g., Render, Vercel, Netlify).
- Update the `VITE_API_BASE_URL` in the frontend `.env` to point to your deployed backend.

## License
MIT

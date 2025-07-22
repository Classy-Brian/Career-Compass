# Development Notes & Cheatsheet

---

## 1. Running the Application for Development

There are two ways to run the application: the recommended Docker method (which runs everything at once) and the manual local method (which is useful for focused debugging of either the frontend or backend).

### A. Running with Docker (Recommended Method)

This is the easiest and most consistent way to run the entire application stack (Frontend, Backend, and Database).

1.  Make sure Docker Desktop is running.
2.  From the **root directory** of the project, run:
    ```bash
    docker-compose up
    ```
3.  **Verification:**
    * The React frontend will be available at `http://localhost:3000`.
    * The Python backend API will be available at `http://localhost:5000`.

### B. Running Locally (Manual Method)

This method requires two separate terminals.

**Terminal 1: Start the Backend (Python/Flask)**

```bash
# 1. Navigate to the backend directory
cd backend

# 2. Activate the Python virtual environment
# On macOS/Linux:
source .venv/bin/activate
# On Windows:
# .\.venv\Scripts\activate

# 3. Start the Flask server
# This will run the app found in app.py in debug mode
flask run

# Backend API should now be running at http://localhost:5000
# Keep this terminal open
```

**Terminal 2: Start the Frontend (React/Vite)**

```bash
# 1. Navigate to the frontend directory
cd frontend

# 2. Install dependencies if you haven't already
npm install

# 3. Start the Vite development server
npm run dev

# React app should now be running at http://localhost:3000
```

***IMPORTANT NOTE ON CORS:***
When running locally, the frontend (localhost:3000) and backend (localhost:5000) are on different "origins." Browsers block requests between different origins by default for security (this is called CORS). To fix this, you will need to install and enable CORS on your Flask backend.

```bash
# In your activated backend environment:
pip install flask-cors
```

Then, in your backend/app.py file, you'll add a few lines of code to enable it.

---

## 2. Understanding the Project Structure

Here's a quick look at what the most important files and folders do.

**backend/**
- **app.py**: The main entry point for our Flask server. This is where all our API routes (e.g., /api/analyze-resume) will be defined.
- **requirements.txt**: A list of all the Python packages our backend depends on (like Flask, Flask-Cors, etc.).
- **.venv/**: The local Python virtual environment folder (ignored by Git).

**frontend/**
- **src/**: This is where we'll spend most of our time. It contains all our React components, styles, and logic.
- **src/main.jsx**: The main entry point that renders the React application into the **index.html** file.
- **src/App.jsx**: The root component of our application. All other components will live inside this one.
- **package.json**: Lists our frontend dependencies (like React) and defines helpful scripts like npm run dev.
- **vite.config.js**: Configuration file for Vite, our frontend build tool.

--- 

## 3. General Workflow Reminder (Gitflow)

1. Always pull the latest changes from the ```develop``` branch before starting new work: ```git checkout develop && git pull```.

2. Create a new feature branch for every new task: ```git checkout -b feature/my-new-feature```.

3. Commit your work with clear messages.

4. Push your feature branch and open a Pull Request to merge it back into ```develop```.
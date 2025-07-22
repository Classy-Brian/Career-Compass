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
source .venv/Scripts/activate

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
- **app.py**: This is the main entry point for the entire backend. Its only job is to start the server. It's the file we run with the flask run command.
- **config.py**: This file holds all the configuration settings for our application, like secret keys and the database connection URL.
- **.flaskenv**: A convenience file for local development. It automatically tells Flask where our app is (FLASK_APP=run.py) and to run it in debug mode (FLASK_DEBUG=1).
- **app/**: This directory is the core of our Flask application, treated as a Python "package."
    - **__init__.py**: This special file initializes our Flask application. It contains a function called **create_app()** that assembles all the different parts of our app.
    - **models/**: This is where we will define our database tables. Each file inside will be a Python class that represents a table in our database (e.g., a **User** class will map to a users table).
    - **routes/**: This is where our API endpoints live. We'll organize our routes into different files (e.g., **auth_routes.py**, **resume_routes.py**) to keep them from getting cluttered.
    - **services/**: This is where the "business logic" goes. Our route functions will be simple and will call functions in this folder to do the actual work, like analyzing a resume or fetching user data from the database.

**frontend/**
- **src/**: This is the main folder that contains all of our frontend source code.
    - **pages/**: This is where our main page components will live (the equivalent of "screens"). For example: **HomePage.jsx**, **LoginPage.jsx**, **CareerPlannerPage.jsx**.
    - **components/**: This folder is for smaller, reusable UI pieces that we'll use to build our pages. For example: a custom **Button.jsx**, **Navbar.jsx**, or **InputField.jsx**.
    - **services/**: This is where all the logic for communicating with our Python backend API will live. For example, a file here might contain a function like api.**getCareerRecommendations()**.
    - **hooks/**: For any custom, reusable React logic that we create.
    - **assets/**: For static files like images, logos, and custom fonts.
    - **styles/**: For global CSS files, like setting up our color theme and default font styles.
- **App.jsx**: This is the top-level component of our application. Its main job will be to handle routing (deciding which page component to display based on the URL).
- **main.jsx**: This is the ultimate entry point for the React app. Its only job is to render our **<App />** component into the **index.html** file.
- **package.json**: This file lists all of our frontend dependencies (like React, React Router) and defines helpful scripts like **npm run dev**.

--- 

## 3. General Workflow Reminder (Gitflow)

1. Always pull the latest changes from the ```develop``` branch before starting new work: ```git checkout develop && git pull```.

2. Create a new feature branch for every new task: ```git checkout -b feature/my-new-feature```.

3. Commit your work with clear messages.

4. Push your feature branch and open a Pull Request to merge it back into ```develop```.
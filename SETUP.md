# Career Compass - Project Setup

## 1. Core Software Installation

* **Git:** For version control.
* **Docker Desktop:** To run our entire application stack (frontend, backend, database) in containers. 
* **VS Code:** Code editor.

---

## 2. Languages & Version Management

### Node.js (for Frontend - React)

1. **Install nvm**
2. **Install and use correct Node version: (For Windows)**
    ```bash
    # Install Node.js v20
    nvm install 20

    # Set v20 as the version to use
    nvm use 20
    ```

### Python (for Backend - Flask/AI)

#### On Windows:

1.  **Install Python 3.11:** The easiest method is to install "Python 3.11" from the Microsoft Store.
2.  **Create & Activate Virtual Environment:**
    * Navigate into the `backend` directory.
    * Create the environment: `python -m venv .venv`
    * Activate it (in Git Bash): `source .venv/Scripts/activate`
    * Activate it (in Command Prompt): `.\.venv\Scripts\activate`

---

## 3. Recommended VS Code Extensions

* **Python** (by Microsoft): Core support for Python development.
* **ESLint** (by Microsoft): Helps find and fix problems in our JavaScript/React code.
* **Prettier - Code formatter** (by Prettier): Automatically formats our code to maintain a consistent style.
* **Docker** (by Microsoft): Makes it easier to manage Docker containers and files from within VS Code.

--- 

## 4. Running the Project with Docker

1. **Clone the Repository:**
    ```bash
    git clone <your-repository-url-goes-here>
    cd <your-project-folder-name>
    ```

2. **Start the Application:**
    ```bash
    docker-compose up --build
    ```

--- 

## 5. Verifying the Setup

* **Frontend (React):** Open your web browser and navigate to http://localhost:3000. You should see the React application's homepage.
* **Backend (Python/Flask):** The backend API will be running and accessible at http://localhost:5000. Your frontend will communicate with this endpoint.
* **Database (PostgreSQL):** The database will be running and accessible to your backend service.


To stop all the running containers, open a new terminal window (or press Ctrl + C in the current one) and run:
```bash
docker-compose down
```
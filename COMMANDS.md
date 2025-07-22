# Project Command Cheatsheet

A quick reference for the most common commands used in this project.

---

## Docker Commands

Used for managing our application stack (frontend, backend, database). Run these from the **root directory**.

| Command | Description |
| :--- | :--- |
| `docker-compose up` | Starts all services. Use this for daily development. |
| `docker-compose up --build` | Rebuilds the images and then starts all services. Use this **only** when you change a `Dockerfile` or update dependencies (like `package.json` or `requirements.txt`). |
| `docker-compose down` | Stops and removes all running containers for this project. |
| `docker ps` | Lists all currently running Docker containers. |

---

## Local Development Commands

Used if you are running the frontend or backend manually, without Docker.

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the React frontend development server. Run this from the `frontend/` directory. |
| `source .venv/bin/activate` | Activates the Python virtual environment on macOS/Linux. Run from the `backend/` directory. |
| `.\.venv\Scripts\activate`| Activates the Python virtual environment on Windows. Run from the `backend/` directory. |
| `flask run` | Starts the Python backend server. Run from the `backend/` directory with the virtual environment active. |

---

## Git Commands (Gitflow Workflow)

Common commands for our version control process.

| Command | Description |
| :--- | :--- |
| `git checkout develop && git pull` | Switches to the `develop` branch and pulls the latest changes. **Do this before starting any new work.** |
| `git checkout -b feature/your-feature-name` | Creates a new feature branch from your current branch (which should be `develop`). |
| `git add .` | Stages all your current changes to be committed. |
| `git commit -m "feat: your message"` | Commits your staged changes with a descriptive message. |
| `git push origin feature/your-feature-name` | Pushes your new branch and its commits to GitHub. |
# Experiment 14 - Unit Testing

This project contains a full-stack setup with unit testing configured for both backend and frontend modules. It also includes a sample GitHub Actions CI workflow to automate these tests.

## Backend (Flask & Pytest)
The backend is a simple Flask application that serves an in-memory API. It is tested using `pytest`.

### Running Backend Tests
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   source venv/Scripts/activate # On Windows
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the tests:
   ```bash
   pytest tests/
   ```

## Frontend (React/Vite & Vitest)
The frontend is built with React and Vite. It contains a `ContactForm` component that is tested using `vitest` and `@testing-library/react`.

### Running Frontend Tests
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the tests:
   ```bash
   npm run test -- --run
   ```

## GitHub Actions
The `.github/workflows/main.yml` file contains a configuration for running both backend and frontend tests automatically when code is pushed to the `main` branch.

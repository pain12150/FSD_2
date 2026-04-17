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

## Learning Outcomes 
1) Understand Unit Testing Concepts (Learned the fundamentals of unit testing, including test cases, assertions, and test coverage for both backend and frontend applications.)

2) Implement Backend Testing with Pytest (Gained hands-on experience writing and executing test cases for a Flask-based API using pytest.)

3) Test Frontend Components using Vitest (Learned how to test React components (like ContactForm) using vitest and @testing-library/react.)

4) Set Up and Use CI/CD with GitHub Actions (Understood how to automate testing workflows by configuring GitHub Actions to run tests on every push.)

5) Improve Code Quality and Reliability (Developed skills to detect bugs early, ensure code correctness, and maintain robust full-stack applications through testing.)


By Jatin UID 23BDA70054
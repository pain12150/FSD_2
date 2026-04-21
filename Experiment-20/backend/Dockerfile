# ============================================
# Dockerfile for Flask Backend Application
# Experiment-20: CI/CD Pipeline Implementation
# ============================================

# Use official Python 3.11 slim image as base
FROM python:3.11-slim

# Set metadata labels
LABEL maintainer="Jatin <23BDA70054>"
LABEL description="Flask Backend API for Experiment-20 CI/CD Pipeline"
LABEL version="1.0.0"

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV FLASK_APP=app.py
ENV FLASK_ENV=production

# Set the working directory inside the container
WORKDIR /app

# Copy requirements first (for Docker cache optimization)
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy application source code
COPY . .

# Expose port 5000 for the Flask application
EXPOSE 5000

# Health check to verify the container is running properly
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD python -c "import urllib.request; urllib.request.urlopen('http://localhost:5000/api/health')" || exit 1

# Run the application using gunicorn for production
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "--workers", "2", "--threads", "2", "app:app"]

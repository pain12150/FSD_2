import pytest
import sys
import os

# Add the parent directory to sys.path so app can be imported
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from app import app, users

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        # Reset users list before each test
        users.clear()
        yield client

def test_home_route(client):
    response = client.get('/')
    assert response.status_code == 200
    data = response.get_json()
    assert "message" in data
    assert data["message"] == "Welcome to the Flask API"

def test_health_check(client):
    response = client.get('/api/health')
    assert response.status_code == 200
    data = response.get_json()
    assert data["status"] == "healthy"

def test_get_users_empty(client):
    response = client.get('/api/users')
    assert response.status_code == 200
    assert response.get_json() == []

def test_create_user_success(client):
    new_user = {"name": "John Doe", "email": "john@example.com"}
    response = client.post('/api/users', json=new_user)
    assert response.status_code == 201
    
    data = response.get_json()
    assert data['name'] == "John Doe"
    assert data['email'] == "john@example.com"
    assert data['id'] == 1

def test_create_user_invalid(client):
    response = client.post('/api/users', json={"name": "John Doe"})
    assert response.status_code == 400
    data = response.get_json()
    assert "error" in data

def test_create_multiple_users(client):
    user1 = {"name": "Alice", "email": "alice@example.com"}
    user2 = {"name": "Bob", "email": "bob@example.com"}
    
    client.post('/api/users', json=user1)
    client.post('/api/users', json=user2)
    
    response = client.get('/api/users')
    data = response.get_json()
    assert len(data) == 2
    assert data[0]['name'] == "Alice"
    assert data[1]['name'] == "Bob"

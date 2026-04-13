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

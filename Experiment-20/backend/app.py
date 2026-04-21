from flask import Flask, request, jsonify

app = Flask(__name__)

# In-memory storage for simplicity
users = []

@app.route('/')
def home():
    return jsonify({
        "message": "Welcome to the Flask API",
        "version": "1.0.0",
        "endpoints": {
            "GET /api/users": "List all users",
            "POST /api/users": "Create a new user",
            "GET /api/health": "Health check"
        }
    }), 200

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy", "service": "flask-backend"}), 200

@app.route('/api/users', methods=['GET'])
def get_users():
    return jsonify(users), 200

@app.route('/api/users', methods=['POST'])
def create_user():
    data = request.get_json()
    if not data or 'name' not in data or 'email' not in data:
        return jsonify({"error": "Invalid data"}), 400
    
    new_user = {
        "id": len(users) + 1,
        "name": data['name'],
        "email": data['email']
    }
    users.append(new_user)
    return jsonify(new_user), 201

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

import os
import base64
from flask import Flask, request, jsonify
from flask_jwt_extended import (
    JWTManager, create_access_token,
    jwt_required, get_jwt_identity
)
from datetime import timedelta

app = Flask(__name__)

# ================================
# CONFIGURATION
# ================================
app.config["JWT_SECRET_KEY"] = os.environ.get("JWT_SECRET_KEY", "change-this-secret")
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)

jwt = JWTManager(app)

# ================================
# In-memory user store
# (Use database in real production)
# ================================
users = {
    "admin": {
        "password": "admin123",
        "role": "admin"
    },
    "john": {
        "password": "john123",
        "role": "user"
    }
}

# ================================
# HEALTH CHECK
# ================================
@app.route("/health")
def health():
    return jsonify({"status": "ok"}), 200


# ================================
# BASIC AUTHENTICATION
# ================================
@app.route("/basic-protected")
def basic_protected():
    auth = request.authorization

    if not auth:
        return jsonify({"error": "Missing Basic Auth"}), 401

    user = users.get(auth.username)

    if user and user["password"] == auth.password:
        return jsonify({
            "message": f"Basic Auth Success",
            "user": auth.username
        })

    return jsonify({"error": "Invalid credentials"}), 401


# ================================
# SIMPLE TOKEN AUTH
# ================================
@app.route("/token-login", methods=["POST"])
def token_login():
    data = request.get_json()

    if not data:
        return jsonify({"error": "Missing JSON body"}), 400

    username = data.get("username")
    password = data.get("password")

    user = users.get(username)

    if user and user["password"] == password:
        token = base64.b64encode(username.encode()).decode()

        return jsonify({
            "token": token,
            "type": "simple"
        })

    return jsonify({"error": "Invalid credentials"}), 401


@app.route("/token-protected")
def token_protected():
    token = request.headers.get("x-auth-token")

    if not token:
        return jsonify({"error": "Missing Token"}), 401

    try:
        username = base64.b64decode(token).decode()

        if username in users:
            return jsonify({
                "message": "Token Auth Success",
                "user": username
            })

    except Exception:
        pass

    return jsonify({"error": "Invalid Token"}), 401


# ================================
# JWT AUTHENTICATION
# ================================
@app.route("/jwt-login", methods=["POST"])
def jwt_login():
    data = request.get_json()

    if not data:
        return jsonify({"error": "Missing JSON body"}), 400

    username = data.get("username")
    password = data.get("password")

    user = users.get(username)

    if user and user["password"] == password:
        token = create_access_token(identity=username)

        return jsonify({
            "access_token": token,
            "type": "Bearer"
        })

    return jsonify({"error": "Invalid credentials"}), 401


@app.route("/jwt-protected")
@jwt_required()
def jwt_protected():
    current_user = get_jwt_identity()

    return jsonify({
        "message": "JWT Auth Success",
        "user": current_user
    })


# ================================
# ROOT
# ================================
@app.route("/")
def home():
    return jsonify({
        "message": "Authentication API Running",
        "routes": {
            "basic": "/basic-protected",
            "token_login": "/token-login (POST)",
            "token_protected": "/token-protected",
            "jwt_login": "/jwt-login (POST)",
            "jwt_protected": "/jwt-protected"
        }
    })


# ================================
# ERROR HANDLERS
# ================================
@app.errorhandler(404)
def not_found(e):
    return jsonify({"error": "Route not found"}), 404


@app.errorhandler(500)
def server_error(e):
    return jsonify({"error": "Internal server error"}), 500


if __name__ == "__main__":
    app.run()

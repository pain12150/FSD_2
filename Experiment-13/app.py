import os
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from marshmallow import Schema, fields, ValidationError
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)

# Fetch database connection details from environment variables
db_user = os.getenv('DB_USER', 'root')
db_password = os.getenv('DB_PASSWORD', '')
db_host = os.getenv('DB_HOST', 'localhost')
db_port = os.getenv('DB_PORT', '3306')
db_name = os.getenv('DB_NAME', 'student_db')

# Configure SQLAlchemy connection URL for MySQL
# Format: mysql+pymysql://username:password@host:port/database_name
app.config['SQLALCHEMY_DATABASE_URI'] = f"mysql+pymysql://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# ----------------- Database Model ----------------- #
class Student(db.Model):
    __tablename__ = 'student'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    age = db.Column(db.Integer, nullable=False)
    course = db.Column(db.String(100), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "age": self.age,
            "course": self.course
        }

# ----------------- Validation Schema ----------------- #
class StudentSchema(Schema):
    name = fields.Str(required=True, error_messages={"required": "Name is required."})
    email = fields.Email(required=True, error_messages={"required": "Email is required.", "invalid": "Not a valid email address."})
    age = fields.Int(required=True, error_messages={"required": "Age is required.", "invalid": "Age must be an integer."})
    course = fields.Str(required=True, error_messages={"required": "Course is required."})

student_schema = StudentSchema()

# Create the tables if they do not exist
with app.app_context():
    # In a production environment, you'd use Flask-Migrate or similar
    db.create_all()

# ----------------- CRUD API Endpoints ----------------- #

@app.route('/students', methods=['POST'])
def create_student():
    """Create a new student with validation"""
    json_data = request.get_json()
    if not json_data:
        return jsonify({"message": "No input data provided"}), 400

    # Validate and deserialize input
    try:
        data = student_schema.load(json_data)
    except ValidationError as err:
        return jsonify({"errors": err.messages}), 422

    # Check if email already exists
    if Student.query.filter_by(email=data['email']).first():
        return jsonify({"message": "Student with this email already exists."}), 409

    new_student = Student(
        name=data['name'],
        email=data['email'],
        age=data['age'],
        course=data['course']
    )
    
    db.session.add(new_student)
    db.session.commit()
    
    return jsonify({"message": "Student created successfully.", "student": new_student.to_dict()}), 201


@app.route('/students', methods=['GET'])
def get_all_students():
    """Fetch all students"""
    students = Student.query.all()
    return jsonify([student.to_dict() for student in students]), 200


@app.route('/students/<int:student_id>', methods=['GET'])
def get_student(student_id):
    """Fetch a single student by ID"""
    student = Student.query.get(student_id)
    if not student:
        return jsonify({"message": "Student not found."}), 404
        
    return jsonify(student.to_dict()), 200


@app.route('/students/<int:student_id>', methods=['PUT'])
def update_student(student_id):
    """Update a specific student by ID"""
    student = Student.query.get(student_id)
    if not student:
        return jsonify({"message": "Student not found."}), 404

    json_data = request.get_json()
    if not json_data:
        return jsonify({"message": "No input data provided"}), 400

    # Validate and deserialize input
    try:
        data = student_schema.load(json_data)
    except ValidationError as err:
        return jsonify({"errors": err.messages}), 422

    # Verify if email is taken by another student
    existing_user = Student.query.filter_by(email=data['email']).first()
    if existing_user and existing_user.id != student.id:
         return jsonify({"message": "Email already in use by another student."}), 409

    student.name = data['name']
    student.email = data['email']
    student.age = data['age']
    student.course = data['course']
    
    db.session.commit()
    
    return jsonify({"message": "Student updated successfully.", "student": student.to_dict()}), 200


@app.route('/students/<int:student_id>', methods=['DELETE'])
def delete_student(student_id):
    """Delete a specific student by ID"""
    student = Student.query.get(student_id)
    if not student:
        return jsonify({"message": "Student not found."}), 404

    db.session.delete(student)
    db.session.commit()
    
    return jsonify({"message": "Student deleted successfully."}), 200

if __name__ == '__main__':
    # Run the server on port 5000 in debug mode
    app.run(debug=True, host='0.0.0.0', port=5000)

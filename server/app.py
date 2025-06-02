from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from models import db, User
from seed import get_dashboard_data
from flask_migrate import Migrate
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)
CORS(app)

# Configurations
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Upload configuration
UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Initialize extensionss
db.init_app(app)
migrate = Migrate(app, db)

with app.app_context():
    db.create_all()

# Helper function
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Routes
@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.get_json()
    phone = data.get('phone')
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    mpesa = data.get('mpesa')

    if not phone or not name or not password or not mpesa:
        return jsonify({'message': 'Missing required fields'}), 400

    if User.query.filter_by(phone=phone).first():
        return jsonify({'message': 'User already exists'}), 409

    user = User(phone=phone, name=name, email=email, mpesa=mpesa)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()

    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    phone = data.get('phone')
    password = data.get('password')

    user = User.query.filter_by(phone=phone).first()
    if not user or not user.check_password(password):
        return jsonify({'message': 'Invalid credentials'}), 401

    return jsonify({
        'message': 'Login successful',
        'user': user.to_dict()
    }), 200

@app.route('/api/dashboard', methods=['GET'])
def dashboard():
    phone = request.args.get('phone')
    data = get_dashboard_data(phone)
    return jsonify(data), 200

@app.route('/api/upload-avatar', methods=['POST'])
def upload_avatar():
    if 'avatar' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['avatar']

    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)

        avatar_url = f'/uploads/{filename}'  # Local path to serve
        return jsonify({'avatarUrl': avatar_url}), 200

    return jsonify({'error': 'Invalid file type'}), 400

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

if __name__ == '__main__': 
    app.run(debug=True)

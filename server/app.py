from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, User
from seed import get_dashboard_data
from flask_migrate import Migrate

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
migrate = Migrate(app, db)

with app.app_context():
    db.create_all()

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

if __name__ == '__main__':
    app.run(debug=True)

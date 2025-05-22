import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../../auth/AuthForm'; 
import './Login.css';

function Login() {
  const navigate = useNavigate(); // for redirecting after successful login

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // clear previous errors

    try {
      await login({ phone, password }); // call your authService function
      navigate('/dashboard'); // redirect to dashboard or homepage
    } catch (err) {
      setError(err.message); // show error from server
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}
          
          <div className="form-group mb-3">
            <label htmlFor="loginPhone" className="form-label">Phone Number</label>
            <input 
              type="tel" 
              id="loginPhone" 
              required 
              className="form-control"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)} // controlled input
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="loginPassword" className="form-label">Password</label>
            <input 
              type="password" 
              id="loginPassword" 
              required 
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // 🔁 controlled input
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Sign In
          </button>
          <div className="form-footer mt-3 text-center">
            <p>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

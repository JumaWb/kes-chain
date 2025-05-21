import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Sign In</h2>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="loginPhone" className="form-label">Phone Number</label>
            <input 
              type="tel" 
              id="loginPhone" 
              required 
              className="form-control"
              placeholder="Enter phone number"
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

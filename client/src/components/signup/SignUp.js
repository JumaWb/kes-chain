// src/components/Signup.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

function Signup() {
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Create Account</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email (Optional)</label>
            <input type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Create Password</label>
            <input type="password" id="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="mpesa">M-Pesa Number</label>
            <input type="tel" id="mpesa" required />
          </div>
          <button type="submit" className="btn">Complete Registration</button>
          <div className="form-footer">
            <p>Already have an account? <Link to="/login">Sign In</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
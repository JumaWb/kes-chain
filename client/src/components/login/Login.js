import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../../auth/AuthForm'; // keeping this as you requested
import './Login.css';
import '../../App.css'; // for spinner styles

function Login() {
  const navigate = useNavigate();

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await login({ phone, password });
      setLoading(true); // show spinner
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000); // delay redirect
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="auth-container d-flex justify-content-center align-items-center vh-100">
      {!loading ? (
        <div className="auth-form bg-white p-4 shadow rounded" style={{ minWidth: '320px' }}>
          <h2 className="text-center mb-4">Sign In</h2>
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
                onChange={(e) => setPhone(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">Sign In</button>

            <div className="form-footer mt-3 text-center">
              <p>
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </p>
            </div>
          </form>
        </div>
      ) : (
        <div className="loading-spinner-container text-center">
          <div className="custom-spinner mx-auto"></div>
          <p className="mt-3 text-muted">Logging in, please wait...</p>
        </div>
      )}
    </div>
  );
}

export default Login;

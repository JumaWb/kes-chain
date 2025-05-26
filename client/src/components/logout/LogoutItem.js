import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../auth/AuthForm'; // keep this as your setup
import '../../App.css'; 

function LogoutItem() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    logout(); // remove token
    setLoading(true); // show spinner
    setTimeout(() => {
      navigate('/'); // redirect to landing
    }, 2000);
  };

  return (
    <li>
      {!loading ? (
        <button
          onClick={handleLogout}
          className="nav-link btn btn-link text-start w-100"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <i className="fas fa-sign-out-alt me-2"></i>
          <span>Logout</span>
        </button>
      ) : (
        <div className="d-flex justify-content-center align-items-center py-2">
          <div className="custom-spinner me-2"></div>
          <span>Logging out...</span>
        </div>
      )}
    </li>
  );
}

export default LogoutItem;

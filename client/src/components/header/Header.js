import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <Link to="/" className="logo">
            Kes<span>Chain</span>
          </Link>
          <div className="nav-links">
            <Link to="#how-it-works">How It Works</Link>
            <Link to="#features">Features</Link>
            <Link to="#faq">FAQ</Link>
            <Link to="#testimonials">Testimonials</Link>

            {/* Buttons with Bootstrap classes but keeping your existing nav-links styling intact */}
            <Link
              to="/login"
              className="btn btn-outline-primary btn-sm ms-3"
              style={{ borderRadius: '20px', fontWeight: '500' }}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="btn btn-primary btn-sm ms-2"
              style={{ borderRadius: '20px', fontWeight: '500' }}
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

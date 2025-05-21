import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <img src="https://via.placeholder.com/40" alt="User" />
                <span>John Doe</span>
            </div>
            <ul className="sidebar-menu">
                <li>
                    <Link to="/dashboard" className="active">
                        <i className="fas fa-home"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/earnings">
                        <i className="fas fa-wallet"></i>
                        <span>Earnings</span>
                    </Link>
                </li>
                <li>
                    <Link to="/referrals">
                        <i className="fas fa-users"></i>
                        <span>Referrals</span>
                    </Link>
                </li>
                <li>
                    <Link to="/history">
                        <i className="fas fa-history"></i>
                        <span>History</span>
                    </Link>
                </li>
                <li>
                    <Link to="/profile">
                        <i className="fas fa-user"></i>
                        <span>Profile</span>
                    </Link>
                </li>
                <li>
                    <Link to="/settings">
                        <i className="fas fa-cog"></i>
                        <span>Settings</span>
                    </Link>
                </li>
                <li>
                    <Link to="/help">
                        <i className="fas fa-question-circle"></i>
                        <span>Help</span>
                    </Link>
                </li>
                <li>
                    <Link to="/logout">
                        <i className="fas fa-sign-out-alt"></i>
                        <span>Logout</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
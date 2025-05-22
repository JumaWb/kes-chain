import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <img src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.webp?a=1&b=1&s=612x612&w=0&k=20&c=0ids4O4zdfqqB3DcwDY9SGuKOEgTTlpW4csklV0v8t0=" alt="User" />
                <span>John Doe</span>
            </div>
            <ul className="sidebar-menu">
                <li>
                    <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>
                        <i className="fas fa-home"></i>
                        <span>Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/earnings" className={({ isActive }) => isActive ? 'active' : ''}>
                        <i className="fas fa-wallet"></i>
                        <span>Earnings</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/referrals" className={({ isActive }) => isActive ? 'active' : ''}>
                        <i className="fas fa-users"></i>
                        <span>Referrals</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/messages" className={({ isActive }) => isActive ? 'active' : ''}>
                        <i className="fas fa-user"></i>
                        <span>Messages</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings" className={({ isActive }) => isActive ? 'active' : ''}>
                        <i className="fas fa-cog"></i>
                        <span>Settings</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/help" className={({ isActive }) => isActive ? 'active' : ''}>
                        <i className="fas fa-question-circle"></i>
                        <span>Help</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/logout" className={({ isActive }) => isActive ? 'active' : ''}>
                        <i className="fas fa-sign-out-alt"></i>
                        <span>Logout</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;

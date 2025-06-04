import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCamera, faBell, faSearch, 
  faCheck, faCog, faHome, 
  faWallet, faUsers, faHistory,
  faUser, faQuestionCircle, faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import './Settings.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    fullName: 'John Doe',
    phoneNumber: '+254 712 345 678',
    email: 'john.doe@example.com',
    mpesaNumber: '+254 712 345 678',
    gender: 'male',
    country: 'kenya',
    avatarUrl: 'https://via.placeholder.com/80'
  });
  const [notifications, setNotifications] = useState([
    { id: 1, name: 'Email Notifications', description: 'Receive important updates via email', enabled: true },
    { id: 2, name: 'SMS Notifications', description: 'Get transaction alerts via SMS', enabled: true },
    { id: 3, name: 'Push Notifications', description: 'Get instant app notifications', enabled: false },
    { id: 4, name: 'Referral Alerts', description: 'Notify me when someone joins using my link', enabled: true },
    { id: 5, name: 'Withdrawal Alerts', description: 'Notify me when withdrawals are processed', enabled: true }
  ]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleProfileChange = (e) => {
    const { id, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSaveProfile = () => {
    alert('Profile changes saved successfully!');
    // In a real app, this would submit to the backend
  };

  const handleAvatarUpload = () => {
    document.getElementById('avatarInput').click();
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('avatar', file);
    formData.append('phone', profileData.phoneNumber)

    try {
      const response = await fetch('http://127.0.0.1:5000/api/upload-avatar', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        alert('Avatar uploaded successfully!');
        setProfileData(prev => ({
          ...prev,
          avatarUrl: data.avatarUrl || prev.avatarUrl
        }));
      } else {
        alert('Failed to upload avatar.');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('An error occurred while uploading the avatar.');
    }
  };

  const handleSecurityAction = (action) => {
    alert(`${action} functionality would be implemented here`);
  };

  const toggleNotification = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id 
        ? { ...notification, enabled: !notification.enabled } 
        : notification
    ));
  };

  const handleNotificationClick = () => {
    alert('You have 3 new notifications');
  };

  return (
    <div className="container-fluid p-0">
      <Sidebar />
      <div className="main-content">
        <div className="settings-content">
          <div className="settings-header">
            <h2>Account Settings</h2>
            <p>Manage your profile information, security settings, and notification preferences</p>
          </div>
          
          <div className="settings-tabs">
            <div className={`settings-tab ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => handleTabChange('profile')}>
              Profile
            </div>
            <div className={`settings-tab ${activeTab === 'security' ? 'active' : ''}`} onClick={() => handleTabChange('security')}>
              Security
            </div>
            <div className={`settings-tab ${activeTab === 'notifications' ? 'active' : ''}`} onClick={() => handleTabChange('notifications')}>
              Notifications
            </div>
          </div>
          
          {/* Profile Panel */}
          <div className={`settings-panel ${activeTab === 'profile' ? 'active' : ''}`} id="profile-panel">
            <div className="profile-settings">
              <div className="profile-header">
                <h3>Personal Information</h3>
              </div>

              <div className="profile-avatar">
                <img src={profileData.avatarUrl} alt="Profile" className="avatar-image" />
                <div className="avatar-upload">
                  <button className="avatar-upload-btn" onClick={handleAvatarUpload}>
                    <FontAwesomeIcon icon={faCamera} /> Change Photo
                  </button>
                  <p className="avatar-note">JPG, GIF or PNG. Max size 2MB</p>
                </div>
                <input
                  type="file"
                  id="avatarInput"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleFileUpload}
                />
              </div>

              <form className="profile-form">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" id="fullName" value={profileData.fullName} onChange={handleProfileChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input type="tel" id="phoneNumber" value={profileData.phoneNumber} onChange={handleProfileChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" value={profileData.email} onChange={handleProfileChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="mpesaNumber">M-Pesa Number</label>
                  <input type="tel" id="mpesaNumber" value={profileData.mpesaNumber} onChange={handleProfileChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select id="gender" value={profileData.gender} onChange={handleProfileChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <select id="country" value={profileData.country} onChange={handleProfileChange}>
                    <option value="kenya">Kenya</option>
                    <option value="uganda">Uganda</option>
                    <option value="tanzania">Tanzania</option>
                    <option value="rwanda">Rwanda</option>
                  </select>
                </div>

                <div className="form-actions">
                  <button type="button" className="save-btn" onClick={handleSaveProfile}>
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Security Panel */}
          <div className={`settings-panel ${activeTab === 'security' ? 'active' : ''}`} id="security-panel">
            <div className="security-settings">
              <div className="security-item">
                <div className="security-info">
                  <h4>Password</h4>
                  <p>Last changed 3 months ago</p>
                </div>
                <div className="security-action">
                  <button className="btn btn-outline" onClick={() => handleSecurityAction('Change Password')}>
                    Change Password
                  </button>
                </div>
              </div>
              
              <div className="security-item">
                <div className="security-info">
                  <h4>Two-Factor Authentication</h4>
                  <p>Add an extra layer of security to your account</p>
                </div>
                <div className="security-action">
                  <button className="btn btn-outline" onClick={() => handleSecurityAction('Enable 2FA')}>
                    Enable 2FA
                  </button>
                </div>
              </div>
              
              <div className="security-item">
                <div className="security-info">
                  <h4>Login Activity</h4>
                  <p>View your recent login history</p>
                </div>
                <div className="security-action">
                  <button className="btn btn-outline" onClick={() => handleSecurityAction('View Activity')}>
                    View Activity
                  </button>
                </div>
              </div>
              
              <div className="security-item">
                <div className="security-info">
                  <h4>Connected Devices</h4>
                  <p>2 devices currently active</p>
                </div>
                <div className="security-action">
                  <button className="btn btn-outline" onClick={() => handleSecurityAction('Manage Devices')}>
                    Manage Devices
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Notification Panel */}
          <div className={`settings-panel ${activeTab === 'notifications' ? 'active' : ''}`} id="notifications-panel">
            <div className="notification-settings">
              {notifications.map(notification => (
                <div className="notification-item" key={notification.id}>
                  <div className="notification-info">
                    <h4>{notification.name}</h4>
                    <p>{notification.description}</p>
                  </div>
                  <label className="switch">
                    <input 
                      type="checkbox" 
                      checked={notification.enabled}
                      onChange={() => toggleNotification(notification.id)}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

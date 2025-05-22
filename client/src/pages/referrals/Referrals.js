import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers, faUserCheck, faClock, faCoins,
  faCopy, faCheck, faDownload, faQrcode,
   faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import {
  faWhatsapp, faFacebookF, faTwitter,
  faTelegram
} from '@fortawesome/free-brands-svg-icons';
import './Referrals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Referrals = () => {
  const [referrals, setReferrals] = useState([
    { id: 1, name: 'James Mwangi', phone: '0722***123', date: 'Mar 20, 2023', status: 'active', earnings: '+100 KSh' },
    { id: 2, name: 'Sarah Kamau', phone: '0711***456', date: 'Mar 19, 2023', status: 'active', earnings: '+100 KSh' },
    { id: 3, name: 'Michael Otieno', phone: '0700***789', date: 'Mar 15, 2023', status: 'active', earnings: '+100 KSh' },
    { id: 4, name: 'Grace Wambui', phone: '0798***012', date: 'Mar 14, 2023', status: 'pending', earnings: '-' },
    { id: 5, name: 'David Kimani', phone: '0723***345', date: 'Mar 12, 2023', status: 'inactive', earnings: '-' },
    { id: 6, name: 'Brian Omondi', phone: '0745***678', date: 'Mar 10, 2023', status: 'active', earnings: '+100 KSh' },
    { id: 7, name: 'Nancy Achieng', phone: '0734***901', date: 'Mar 8, 2023', status: 'active', earnings: '+100 KSh' },
  ]);

  const [timeFilter, setTimeFilter] = useState('all');
  const [copied, setCopied] = useState(false);
  const referralLink = 'https://keschain.co.ke/ref/johndoe123';

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTimeFilter = (filter) => {
    setTimeFilter(filter);
  };

  const handleShare = (platform) => {
    alert(`Sharing referral link via ${platform}`);
  };

  const handleDownloadQR = () => {
    alert('Downloading QR code image');
  };

  const handleExport = () => {
    alert('Exporting referrals data...');
  };

  const handleAction = (action, name) => {
    alert(`${action} ${name}`);
  };

  return (
    <div className="container-fluid p-0">
        <Sidebar />
      <div className="main-content">
        <div className="referral-content">
          <div className="referral-header">
            <h2>My Referrals</h2>
            <div className="time-filter">
              {['all', 'today', 'week', 'month', 'year'].map((filter) => (
                <button
                  key={filter}
                  className={timeFilter === filter ? 'active' : ''}
                  onClick={() => handleTimeFilter(filter)}
                >
                  {filter === 'all'
                    ? 'All'
                    : filter === 'today'
                    ? 'Today'
                    : filter === 'week'
                    ? 'This Week'
                    : filter === 'month'
                    ? 'This Month'
                    : 'This Year'}
                </button>
              ))}
            </div>
          </div>

          <div className="referral-stats">
            <div className="stat-card">
              <div className="stat-icon total">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <div className="stat-info">
                <h3>42</h3>
                <p>Total Referrals</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon active">
                <FontAwesomeIcon icon={faUserCheck} />
              </div>
              <div className="stat-info">
                <h3>35</h3>
                <p>Active Referrals</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon pending">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <div className="stat-info">
                <h3>5</h3>
                <p>Pending Referrals</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon earned">
                <FontAwesomeIcon icon={faCoins} />
              </div>
              <div className="stat-info">
                <h3>4,200 KSh</h3>
                <p>Earned From Referrals</p>
              </div>
            </div>
          </div>

          <div className="referral-tools">
            <div className="referral-card">
              <h3>Your Referral Link</h3>
              <div className="referral-link-box">
                <input type="text" value={referralLink} readOnly />
                <button onClick={copyReferralLink}>
                  <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
                  {copied ? ' Copied!' : ' Copy'}
                </button>
              </div>

              <h3>Share Your Link</h3>
              <div className="share-buttons">
                <button className="share-btn whatsapp" onClick={() => handleShare('WhatsApp')}>
                  <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                </button>
                <button className="share-btn facebook" onClick={() => handleShare('Facebook')}>
                  <FontAwesomeIcon icon={faFacebookF} /> Facebook
                </button>
                <button className="share-btn twitter" onClick={() => handleShare('Twitter')}>
                  <FontAwesomeIcon icon={faTwitter} /> Twitter
                </button>
                <button className="share-btn telegram" onClick={() => handleShare('Telegram')}>
                  <FontAwesomeIcon icon={faTelegram} /> Telegram
                </button>
                <button className="share-btn email" onClick={() => handleShare('Email')}>
                  <FontAwesomeIcon icon={faEnvelope} /> Email
                </button>
              </div>
            </div>

            <div className="referral-card">
              <h3>Your Referral QR Code</h3>
              <div className="qr-code-container">
                <div className="qr-code">
                  <FontAwesomeIcon icon={faQrcode} style={{ fontSize: '40px' }} />
                </div>
                <button className="download-btn" onClick={handleDownloadQR}>
                  <FontAwesomeIcon icon={faDownload} /> Download QR Code
                </button>
              </div>
            </div>
          </div>

          <div className="referral-table-container">
            <div className="table-header">
              <h3>Referral History</h3>
              <button className="export-btn" onClick={handleExport}>
                <FontAwesomeIcon icon={faDownload} /> Export
              </button>
            </div>
            <div className="table-responsive">
              <table className="referral-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Date Joined</th>
                    <th>Status</th>
                    <th>Earnings</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {referrals.map((referral) => (
                    <tr key={referral.id}>
                      <td>{referral.name}</td>
                      <td>{referral.phone}</td>
                      <td>{referral.date}</td>
                      <td>
                        <span className={`status ${referral.status}`}>
                          {referral.status.charAt(0).toUpperCase() + referral.status.slice(1)}
                        </span>
                      </td>
                      <td>{referral.earnings}</td>
                      <td>
                        <button
                          className="action-btn"
                          onClick={() =>
                            handleAction(
                              referral.status === 'pending'
                                ? 'Remind'
                                : referral.status === 'inactive'
                                ? 'Reinvite'
                                : 'Message',
                              referral.name
                            )
                          }
                        >
                          {referral.status === 'pending'
                            ? 'Remind'
                            : referral.status === 'inactive'
                            ? 'Reinvite'
                            : 'Message'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referrals;

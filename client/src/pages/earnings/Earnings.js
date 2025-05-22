// Earnings.jsx
import React, { useState } from 'react';
import './Earnings.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../../components/sidebar/Sidebar';
import { Button } from 'react-bootstrap';

// Dummy JSON data


const Earnings = () => {
    const earningsData = {
        summary: {
          totalEarnings: 8450,
          availableBalance: 2150,
          totalWithdrawn: 6300,
          pendingEarnings: 400
        },
        transactions: [
          {
            id: 1,
            date: 'Mar 20, 2023',
            description: 'Referral Bonus',
            referral: 'James Mwangi',
            status: 'completed',
            amount: 100
          },
          {
            id: 2,
            date: 'Mar 19, 2023',
            description: 'Referral Bonus',
            referral: 'Sarah Kamau',
            status: 'completed',
            amount: 100
          },
          {
            id: 3,
            date: 'Mar 18, 2023',
            description: 'Weekly Bonus',
            referral: '-',
            status: 'completed',
            amount: 200
          },
          {
            id: 4,
            date: 'Mar 17, 2023',
            description: 'Withdrawal',
            referral: 'MPESA Transfer',
            status: 'completed',
            amount: -1000
          },
          {
            id: 5,
            date: 'Mar 16, 2023',
            description: 'Referral Bonus',
            referral: 'Michael Otieno',
            status: 'completed',
            amount: 100
          },
          {
            id: 6,
            date: 'Mar 15, 2023',
            description: 'Referral Bonus',
            referral: 'Grace Wambui',
            status: 'pending',
            amount: 100
          },
          {
            id: 7,
            date: 'Mar 14, 2023',
            description: 'Referral Bonus',
            referral: 'David Kimani',
            status: 'completed',
            amount: 100
          }
        ]
      };
  const [activeFilter, setActiveFilter] = useState('Today');
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    console.log(`Filtering earnings for: ${filter}`);
  };

  const handleExport = () => {
    alert('Exporting earnings data...');
  };

  const handleWithdraw = (e) => {
    e.preventDefault();
    const amount = parseFloat(withdrawAmount);
    
    if (!amount || amount < 100) {
      alert('Minimum withdrawal amount is 100 KSh');
      return;
    }
    
    if (amount > earningsData.summary.availableBalance) {
      alert('You cannot withdraw more than your available balance');
      return;
    }
    
    alert(`You will receive an M-Pesa prompt to withdraw ${amount} KSh`);
    setWithdrawAmount('');
  };

  const showNotifications = () => {
    alert('You have 3 new notifications');
  };

  const timeFilters = ['Today', 'Week', 'Month', 'Year', 'All Time'];

  return (
    <div className="earnings-container">
      {/* Main Content */}
      <Sidebar />
      <div className="main-content">
        {/* Top Navigation */}
        <div className="top-nav">
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search earnings..." />
          </div>
          <div className="user-actions">
            <div className="notification-icon" onClick={showNotifications}>
              <i className="fas fa-bell"></i>
              <span className="notification-badge">3</span>
            </div>
            <div className="user-profile">
              <img src="https://via.placeholder.com/40" alt="User" />
              <div className="user-info">
                <h4>John Doe</h4>
                <p>Premium Member</p>
              </div>
            </div>
          </div>
        </div>

        {/* Earnings Content */}
        <div className="earnings-content">
          {/* Earnings Header */}
          <div className="earnings-header">
            <h2>My Earnings</h2>
            <div className="time-filter">
              {timeFilters.map(filter => (
                <button
                  key={filter}
                  className={activeFilter === filter ? 'active' : ''}
                  onClick={() => handleFilterClick(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Earnings Summary */}
          <div className="earnings-summary">
            <div className="summary-card">
              <h3>Total Earnings</h3>
              <div className="amount">{earningsData.summary.totalEarnings.toLocaleString()} KSh</div>
              <div className="change up">
                <i className="fas fa-arrow-up"></i>
                <span>12% from last month</span>
              </div>
            </div>
            <div className="summary-card">
              <h3>Available Balance</h3>
              <div className="amount">{earningsData.summary.availableBalance.toLocaleString()} KSh</div>
              <div className="change up">
                <i className="fas fa-arrow-up"></i>
                <span>5 new referrals</span>
              </div>
            </div>
            <div className="summary-card">
              <h3>Total Withdrawn</h3>
              <div className="amount">{earningsData.summary.totalWithdrawn.toLocaleString()} KSh</div>
              <div className="change up">
                <i className="fas fa-arrow-up"></i>
                <span>3 withdrawals</span>
              </div>
            </div>
            <div className="summary-card">
              <h3>Pending Earnings</h3>
              <div className="amount">{earningsData.summary.pendingEarnings.toLocaleString()} KSh</div>
              <div className="change down">
                <i className="fas fa-arrow-down"></i>
                <span>2 pending referrals</span>
              </div>
            </div>
          </div>

          {/* Earnings Chart */}
          <div className="earnings-chart">
            <div className="chart-placeholder">
              <div>
                <i className="fas fa-chart-line" style={{ fontSize: '40px', marginBottom: '10px' }}></i>
                <p>Earnings Growth Chart</p>
              </div>
            </div>
          </div>

          {/* Earnings Table */}
          <div className="earnings-table-container">
            <div className="table-header">
              <h3>Recent Earnings</h3>
              <Button variant="success" className="export-btn" onClick={handleExport}>
                <i className="fas fa-download"></i>
                Export
              </Button>
            </div>
            <table className="earnings-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Referral</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {earningsData.transactions.map(transaction => (
                  <tr key={transaction.id}>
                    <td>{transaction.date}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.referral}</td>
                    <td>
                      <span className={`status ${transaction.status}`}>
                        {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                      </span>
                    </td>
                    <td className={transaction.amount >= 0 ? 'positive' : 'negative'}>
                      {transaction.amount >= 0 ? '+' : ''}{transaction.amount} KSh
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Withdraw Card */}
          <div className="withdraw-card">
            <h3>Withdraw Your Earnings</h3>
            <form className="withdraw-form" onSubmit={handleWithdraw}>
              <input 
                type="number" 
                placeholder={`Enter amount (min 100 KSh)`}
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
              />
              <Button type="submit" variant="primary">Withdraw to M-Pesa</Button>
            </form>
            <div className="withdraw-info">
              <div className="withdraw-detail">
                <h4>Available Balance</h4>
                <p>{earningsData.summary.availableBalance.toLocaleString()} KSh</p>
              </div>
              <div className="withdraw-detail">
                <h4>Withdrawal Fee</h4>
                <p>0 KSh</p>
              </div>
              <div className="withdraw-detail">
                <h4>Processing Time</h4>
                <p>Instant</p>
              </div>
              <div className="withdraw-detail">
                <h4>Minimum Amount</h4>
                <p>100 KSh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
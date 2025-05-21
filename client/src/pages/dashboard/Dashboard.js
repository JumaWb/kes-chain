import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
    const [withdrawAmount, setWithdrawAmount] = useState('');
    
    const copyReferralLink = () => {
        const referralLink = document.getElementById('referralLink');
        referralLink.select();
        document.execCommand('copy');
        
        const copyButton = document.querySelector('.referral-link button');
        const originalText = copyButton.innerHTML;
        copyButton.innerHTML = '<i class="fas fa-check"></i> Copied!';
        
        setTimeout(() => {
            copyButton.innerHTML = originalText;
        }, 2000);
    };
    
    const handleNotificationClick = () => {
        alert('You have 3 new notifications');
    };
    
    const handleWithdraw = (e) => {
        e.preventDefault();
        
        if (!withdrawAmount || withdrawAmount < 100) {
            alert('Minimum withdrawal amount is 100 KSh');
            return;
        }
        
        alert(`You will receive an M-Pesa prompt to withdraw ${withdrawAmount} KSh`);
        setWithdrawAmount('');
    };
    
    return (
        <div className="dashboard-container">
            <Sidebar />
            
            <div className="main-content">
                {/* Top Navigation */}
                <div className="top-nav">
                    <div className="search-bar">
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder="Search..." />
                    </div>
                    <div className="user-actions">
                        <div className="notification-icon" onClick={handleNotificationClick}>
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

                {/* Dashboard Content */}
                <div className="dashboard-content">
                    {/* Welcome Banner */}
                    <div className="welcome-banner">
                        <div className="welcome-text">
                            <h2>Welcome back, John!</h2>
                            <p>You've earned 2,500 KSh this week. Keep referring to earn more!</p>
                        </div>
                        <div className="referral-link">
                            <input 
                                type="text" 
                                value="https://keschain.co.ke/ref/johndoe123" 
                                id="referralLink" 
                                readOnly 
                            />
                            <button onClick={copyReferralLink}>
                                <i className="fas fa-copy"></i> Copy
                            </button>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="stats-cards">
                        <div className="stat-card">
                            <div className="stat-icon earnings">
                                <i className="fas fa-coins"></i>
                            </div>
                            <div className="stat-info">
                                <h3>5,750 KSh</h3>
                                <p>Total Earnings</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon referrals">
                                <i className="fas fa-user-plus"></i>
                            </div>
                            <div className="stat-info">
                                <h3>32</h3>
                                <p>Successful Referrals</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon balance">
                                <i className="fas fa-wallet"></i>
                            </div>
                            <div className="stat-info">
                                <h3>1,250 KSh</h3>
                                <p>Available Balance</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon withdrawn">
                                <i className="fas fa-money-bill-wave"></i>
                            </div>
                            <div className="stat-info">
                                <h3>4,500 KSh</h3>
                                <p>Total Withdrawn</p>
                            </div>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="dashboard-section">
                        <div className="section-header">
                            <h3>Recent Activity</h3>
                            <a href="#">View All</a>
                        </div>
                        <ul className="activity-list">
                            <li className="activity-item">
                                <div className="activity-icon">
                                    <i className="fas fa-user-plus"></i>
                                </div>
                                <div className="activity-details">
                                    <h4>New Referral</h4>
                                    <p>James Mwangi joined using your link</p>
                                </div>
                                <div className="activity-amount">+100 KSh</div>
                            </li>
                            <li className="activity-item">
                                <div className="activity-icon">
                                    <i className="fas fa-money-bill-wave"></i>
                                </div>
                                <div className="activity-details">
                                    <h4>Withdrawal</h4>
                                    <p>Sent to M-Pesa (0722***456)</p>
                                </div>
                                <div className="activity-amount">-1,000 KSh</div>
                            </li>
                            <li className="activity-item">
                                <div className="activity-icon">
                                    <i className="fas fa-user-plus"></i>
                                </div>
                                <div className="activity-details">
                                    <h4>New Referral</h4>
                                    <p>Sarah Kamau joined using your link</p>
                                </div>
                                <div className="activity-amount">+100 KSh</div>
                            </li>
                            <li className="activity-item">
                                <div className="activity-icon">
                                    <i className="fas fa-coins"></i>
                                </div>
                                <div className="activity-details">
                                    <h4>Bonus Earned</h4>
                                    <p>Weekly bonus for active referrals</p>
                                </div>
                                <div className="activity-amount">+200 KSh</div>
                            </li>
                        </ul>
                    </div>

                    {/* Referral History */}
                    <div className="dashboard-section">
                        <div className="section-header">
                            <h3>Referral History</h3>
                            <a href="#">View All</a>
                        </div>
                        <table className="referral-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Earnings</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>James Mwangi</td>
                                    <td>0722***123</td>
                                    <td>Today, 10:30 AM</td>
                                    <td><span className="status completed">Completed</span></td>
                                    <td>+100 KSh</td>
                                </tr>
                                <tr>
                                    <td>Sarah Kamau</td>
                                    <td>0711***456</td>
                                    <td>Yesterday, 4:15 PM</td>
                                    <td><span className="status completed">Completed</span></td>
                                    <td>+100 KSh</td>
                                </tr>
                                <tr>
                                    <td>Michael Otieno</td>
                                    <td>0700***789</td>
                                    <td>Mar 15, 2023</td>
                                    <td><span className="status completed">Completed</span></td>
                                    <td>+100 KSh</td>
                                </tr>
                                <tr>
                                    <td>Grace Wambui</td>
                                    <td>0798***012</td>
                                    <td>Mar 14, 2023</td>
                                    <td><span className="status pending">Pending</span></td>
                                    <td>+100 KSh</td>
                                </tr>
                                <tr>
                                    <td>David Kimani</td>
                                    <td>0723***345</td>
                                    <td>Mar 12, 2023</td>
                                    <td><span className="status completed">Completed</span></td>
                                    <td>+100 KSh</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Withdraw Funds */}
                    <div className="withdraw-card">
                        <h3>Withdraw Earnings</h3>
                        <form className="withdraw-form" onSubmit={handleWithdraw}>
                            <input 
                                type="number" 
                                placeholder="Enter amount to withdraw"
                                value={withdrawAmount}
                                onChange={(e) => setWithdrawAmount(e.target.value)}
                            />
                            <button type="submit" className="btn btn-primary">
                                Withdraw to M-Pesa
                            </button>
                        </form>
                        <p className="min-amount">Minimum withdrawal amount: 100 KSh</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
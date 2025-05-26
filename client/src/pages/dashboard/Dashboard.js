import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState(null);
    const [withdrawAmount, setWithdrawAmount] = useState('');

    useEffect(() => {
        const userString = localStorage.getItem('user');
        if (!userString) {
            console.error("No user object found in localStorage");
            return;
        }

        let user;
        try {
            user = JSON.parse(userString);
        } catch (error) {
            console.error("Error parsing user data:", error);
            return;
        }

        const phone = user.phone || user.phoneNumber || user.mobile;
        if (!phone) {
            console.error("No phone field found in user object");
            return;
        }

        fetch(`http://127.0.0.1:5000/api/dashboard?phone=${phone}`)
            .then(res => {
                if (!res.ok) throw new Error("Failed to fetch dashboard data");
                return res.json();
            })
            .then(data => setDashboardData(data))
            .catch(err => console.error('Fetch error:', err));
    }, []);

    const handleWithdraw = (e) => {
        e.preventDefault();
        if (!withdrawAmount || Number(withdrawAmount) < 100) {
            alert('Minimum withdrawal amount is 100 KSh');
            return;
        }
        alert(`You will receive an M-Pesa prompt to withdraw ${withdrawAmount} KSh`);
        setWithdrawAmount('');
    };

    const copyReferralLink = () => {
        if (dashboardData?.referralLink) {
            navigator.clipboard.writeText(dashboardData.referralLink);
            alert("Referral link copied!");
        }
    };

    if (!dashboardData) return <div>Loading...</div>;

    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="main-content">
                {/* Top Navigation */}
                <div className="top-nav">
                    <div className="user-profile">
                        <img src={dashboardData.user.avatar} alt="User" />
                        <div className="user-info">
                            <h4>{dashboardData.user.name}</h4>
                            <p>{dashboardData.user.membership}</p>
                        </div>
                    </div>
                </div>

                {/* Welcome Banner */}
                <div className="welcome-banner">
                    <div className="welcome-text">
                        <h2>{dashboardData.welcomeMessage.title}</h2>
                        <p>{dashboardData.welcomeMessage.body}</p>
                    </div>
                    <div className="referral-link">
                        <input type="text" value={dashboardData.referralLink} readOnly />
                        <button onClick={copyReferralLink}>
                            <i className="fas fa-copy"></i> Copy
                        </button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="stats-cards">
                    {dashboardData.stats.map((stat, idx) => (
                        <div className="stat-card" key={idx}>
                            <div className={`stat-icon ${stat.type}`}>
                                <i className={stat.icon}></i>
                            </div>
                            <div className="stat-info">
                                <h3>{stat.amount}</h3>
                                <p>{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recent Activity */}
                <div className="dashboard-section">
                    <div className="section-header">
                        <h3>Recent Activity</h3>
                        <a href="#">View All</a>
                    </div>
                    <ul className="activity-list">
                        {dashboardData.recentActivity.map((item, idx) => (
                            <li className="activity-item" key={idx}>
                                <div className="activity-icon">
                                    <i className={item.icon}></i>
                                </div>
                                <div className="activity-details">
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                                <div className="activity-amount">{item.amount}</div>
                            </li>
                        ))}
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
                            {dashboardData.referralHistory.map((ref, idx) => (
                                <tr key={idx}>
                                    <td>{ref.name}</td>
                                    <td>{ref.phone}</td>
                                    <td>{ref.date}</td>
                                    <td><span className={`status ${ref.status.toLowerCase()}`}>{ref.status}</span></td>
                                    <td>{ref.earnings}</td>
                                </tr>
                            ))}
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
    );
};

export default Dashboard;

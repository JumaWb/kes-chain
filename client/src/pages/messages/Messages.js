import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faBell, 
  faPlus, 
  faInfoCircle, 
  faEllipsisV, 
  faPaperPlane,
  faCoins,
  faMoneyBillWave,
  faUserPlus,
  faGift,
  faBullhorn
} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Messages.css';

const Messages = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true); // optional
  const [error, setError] = useState(null);     // optional

  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New Referral Bonus', message: 'You earned 100 KSh from James Mwangi\'s registration', time: '10:15 AM', icon: faCoins, unread: true },
    { id: 2, title: 'Withdrawal Processed', message: '1,500 KSh has been sent to your M-Pesa account', time: 'Yesterday, 4:30 PM', icon: faMoneyBillWave, unread: true },
    { id: 3, title: 'New Referral', message: 'Sarah Kamau joined using your referral link', time: 'Mar 20, 2:15 PM', icon: faUserPlus, unread: false },
    { id: 4, title: 'Weekly Bonus', message: 'You received a 200 KSh bonus for being active this week', time: 'Mar 18, 9:00 AM', icon: faGift, unread: false },
    { id: 5, title: 'New Feature', message: 'Now you can withdraw directly to your bank account', time: 'Mar 15, 11:30 AM', icon: faBullhorn, unread: false }
  ]);
  //const [activeConversation, setActiveConversation] = useState(1);
  const location = useLocation();
  const defaultConversationId = location.state?.conversationId || 1;
  const [activeConversation, setActiveConversation] = useState(defaultConversationId);


  // 🔄 Fetch messages from backend
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch(`/api/messages?conversationId=${activeConversation}`);
        if (!res.ok) throw new Error('Failed to fetch messages');
        const data = await res.json();
        setMessages(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [activeConversation]);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    if (!showNotifications) {
      const updatedNotifications = notifications.map(notification => ({
        ...notification,
        unread: false
      }));
      setNotifications(updatedNotifications);
    }
  };

  const handleSendMessage = async () => {
    if (messageInput.trim()) {
      const now = new Date();
      const timeString = now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();

      const newMessage = {
        sender: 'sent',
        text: messageInput,
        time: timeString
      };

      // Update locally for immediate feedback
      setMessages([...messages, { ...newMessage, id: messages.length + 1 }]);
      setMessageInput('');

      // Send to backend
      try {
        await fetch(`/api/messages`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ ...newMessage, conversationId: activeConversation })
        });
      } catch (err) {
        console.error('Failed to send message:', err);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map(notification => ({
      ...notification,
      unread: false
    }));
    setNotifications(updatedNotifications);
  };

  const handleNewMessage = () => {
    alert('New message functionality would be implemented here');
  };

  const handleConversationClick = (conversationId) => {
    setActiveConversation(conversationId);
  };

  return (
    <div className='app-container'>
      <Sidebar/>
      <div className="main-content">
        {/* Top Navigation */}
        <div className="top-nav">
          <div className="search-bar">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="Search messages..." />
          </div>
          <div className="user-actions">
            <div className="notification-icon" onClick={toggleNotifications}>
              <FontAwesomeIcon icon={faBell} />
              {notifications.filter(n => n.unread).length > 0 && (
                <span className="notification-badge">{notifications.filter(n => n.unread).length}</span>
              )}
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

        {/* Messages Content */}
        <div className="messages-content">
          {/* ... conversation list UI unchanged ... */}

          {/* Messages Area */}
          <div className={`messages-area ${showNotifications ? 'd-none' : ''}`}>
            <div className="messages-header">
              <img src="https://via.placeholder.com/40" alt="User" className="messages-header-avatar" />
              <div className="messages-header-info">
                <h4>KesChain Support</h4>
                <p>Online</p>
              </div>
              <div className="messages-header-actions">
                <button title="User Info"><FontAwesomeIcon icon={faInfoCircle} /></button>
                <button title="More Options"><FontAwesomeIcon icon={faEllipsisV} /></button>
              </div>
            </div>

            <div className="messages-container">
              <div className="message-date">Today</div>
              {loading ? (
                <p>Loading messages...</p>
              ) : error ? (
                <p style={{ color: 'red' }}>{error}</p>
              ) : (
                messages.map(message => (
                  <div key={message.id} className={`message ${message.sender}`}>
                    {message.sender === 'received' && (
                      <img src="https://via.placeholder.com/35" alt="User" className="message-avatar" />
                    )}
                    <div className="message-content">
                      <div className="message-bubble">{message.text}</div>
                      <div className="message-time">{message.time}</div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="message-input">
              <input 
                type="text" 
                placeholder="Type a message..." 
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button onClick={handleSendMessage}>
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </div>

          {/* Notifications Panel */}
          <div className={`notifications-panel ${showNotifications ? 'd-block' : 'd-none'}`}>
            <div className="notifications-header">
              <h3>Notifications</h3>
              <button className="mark-all-read" onClick={markAllAsRead}>Mark all as read</button>
            </div>
            {notifications.map(notification => (
              <div key={notification.id} className={`notification-item ${notification.unread ? 'unread' : ''}`}>
                <div className="notification-header">
                  <div className="notification-icon">
                    <FontAwesomeIcon icon={notification.icon} />
                  </div>
                  <div className="notification-title">{notification.title}</div>
                  <div className="notification-time">{notification.time}</div>
                </div>
                <div className="notification-message">{notification.message}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;

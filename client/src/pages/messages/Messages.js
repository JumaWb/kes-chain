import React, { useState } from 'react';
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
  const [messages, setMessages] = useState([
    { id: 1, sender: 'received', text: 'Hello John, how can we help you today?', time: '10:30 AM' },
    { id: 2, sender: 'sent', text: 'Hi, I wanted to ask about my recent withdrawal. It hasn\'t reflected in my M-Pesa yet.', time: '10:32 AM' },
    { id: 3, sender: 'received', text: 'Thank you for reaching out. We\'ve processed your withdrawal of 1,500 KSh. It may take a few more minutes to reflect in your account.', time: '10:35 AM' },
    { id: 4, sender: 'sent', text: 'Okay, thank you. I\'ll check again in a few minutes.', time: '10:36 AM' },
    { id: 5, sender: 'received', text: 'You\'re welcome! Let us know if you don\'t receive it within the next 30 minutes. Also, don\'t forget to check your spam folder for the M-Pesa confirmation message.', time: '10:37 AM' }
  ]);
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New Referral Bonus', message: 'You earned 100 KSh from James Mwangi\'s registration', time: '10:15 AM', icon: faCoins, unread: true },
    { id: 2, title: 'Withdrawal Processed', message: '1,500 KSh has been sent to your M-Pesa account', time: 'Yesterday, 4:30 PM', icon: faMoneyBillWave, unread: true },
    { id: 3, title: 'New Referral', message: 'Sarah Kamau joined using your referral link', time: 'Mar 20, 2:15 PM', icon: faUserPlus, unread: false },
    { id: 4, title: 'Weekly Bonus', message: 'You received a 200 KSh bonus for being active this week', time: 'Mar 18, 9:00 AM', icon: faGift, unread: false },
    { id: 5, title: 'New Feature', message: 'Now you can withdraw directly to your bank account', time: 'Mar 15, 11:30 AM', icon: faBullhorn, unread: false }
  ]);
  const [activeConversation, setActiveConversation] = useState(1);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    
    // Mark notifications as read when panel is opened
    if (!showNotifications) {
      const updatedNotifications = notifications.map(notification => ({
        ...notification,
        unread: false
      }));
      setNotifications(updatedNotifications);
    }
  };

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      const now = new Date();
      const timeString = now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
      
      const newMessage = {
        id: messages.length + 1,
        sender: 'sent',
        text: messageInput,
        time: timeString
      };
      
      setMessages([...messages, newMessage]);
      setMessageInput('');
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
        {/* Conversations List */}
        <div className="conversations-list">
          <div className="conversations-header">
            <h3>Messages</h3>
            <button className="new-message-btn" title="New Message" onClick={handleNewMessage}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          
          <div className="conversation-search">
            <input type="text" placeholder="Search conversations..." />
          </div>
          
          <div 
            className={`conversation-item ${activeConversation === 1 ? 'active' : ''}`} 
            onClick={() => handleConversationClick(1)}
          >
            <img src="https://via.placeholder.com/50" alt="User" className="conversation-avatar" />
            <div className="conversation-info">
              <div className="conversation-header">
                <span className="conversation-name">KesChain Support</span>
                <span className="conversation-time">10:30 AM</span>
              </div>
              <p className="conversation-preview">Thank you for your recent withdrawal request...</p>
            </div>
          </div>
          
          <div 
            className={`conversation-item ${activeConversation === 2 ? 'active' : ''}`} 
            onClick={() => handleConversationClick(2)}
          >
            <img src="https://via.placeholder.com/50/4CAF50/FFFFFF" alt="User" className="conversation-avatar" />
            <div className="conversation-info">
              <div className="conversation-header">
                <span className="conversation-name">James Mwangi <span className="unread-badge">2</span></span>
                <span className="conversation-time">Yesterday</span>
              </div>
              <p className="conversation-preview">Hey, I just joined using your referral link!</p>
            </div>
          </div>
          
          <div 
            className={`conversation-item ${activeConversation === 3 ? 'active' : ''}`} 
            onClick={() => handleConversationClick(3)}
          >
            <img src="https://via.placeholder.com/50/FF9800/FFFFFF" alt="User" className="conversation-avatar" />
            <div className="conversation-info">
              <div className="conversation-header">
                <span className="conversation-name">Sarah Kamau</span>
                <span className="conversation-time">Mar 20</span>
              </div>
              <p className="conversation-preview">How does the referral bonus work?</p>
            </div>
          </div>
          
          <div 
            className={`conversation-item ${activeConversation === 4 ? 'active' : ''}`} 
            onClick={() => handleConversationClick(4)}
          >
            <img src="https://via.placeholder.com/50/2196F3/FFFFFF" alt="User" className="conversation-avatar" />
            <div className="conversation-info">
              <div className="conversation-header">
                <span className="conversation-name">Michael Otieno</span>
                <span className="conversation-time">Mar 18</span>
              </div>
              <p className="conversation-preview">Thanks for the help!</p>
            </div>
          </div>
          
          <div 
            className={`conversation-item ${activeConversation === 5 ? 'active' : ''}`} 
            onClick={() => handleConversationClick(5)}
          >
            <img src="https://via.placeholder.com/50/9C27B0/FFFFFF" alt="User" className="conversation-avatar" />
            <div className="conversation-info">
              <div className="conversation-header">
                <span className="conversation-name">Grace Wambui</span>
                <span className="conversation-time">Mar 15</span>
              </div>
              <p className="conversation-preview">I'm having trouble with my account...</p>
            </div>
          </div>
        </div>
        
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
            
            {messages.map(message => (
              <div key={message.id} className={`message ${message.sender}`}>
                {message.sender === 'received' && (
                  <img src="https://via.placeholder.com/35" alt="User" className="message-avatar" />
                )}
                <div className="message-content">
                  <div className="message-bubble">
                    {message.text}
                  </div>
                  <div className="message-time">{message.time}</div>
                </div>
              </div>
            ))}
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
              <div className="notification-message">
                {notification.message}
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
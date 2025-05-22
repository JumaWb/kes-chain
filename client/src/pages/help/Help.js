// HelpCenter.js
import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import './Help.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch, FaArrowRight, FaRobot, FaPaperPlane, FaUserCircle, FaWallet, FaUsers } from 'react-icons/fa';

const Help = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! I'm KesBot, your virtual assistant. How can I help you today?",
      quickReplies: ["Account Verification", "Withdrawal Issues", "Referral Problems"]
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  // Dummy data for help cards
  const helpCards = [
    {
      icon: <FaUserCircle />,
      title: "Account Help",
      description: "Learn how to create, verify, and manage your KesChain account",
      link: "#"
    },
    {
      icon: <FaWallet />,
      title: "Earnings & Payments",
      description: "Understand how earnings work and how to withdraw your money",
      link: "#"
    },
    {
      icon: <FaUsers />,
      title: "Referral Program",
      description: "Everything about referring friends and maximizing your earnings",
      link: "#"
    }
  ];

  // Dummy data for FAQs
  const faqs = [
    {
      question: "How do I verify my account?",
      answer: "To verify your account, you need to pay a one-time verification fee of 200 KSh. This helps us ensure all users are genuine. After payment, your account will be immediately activated for referrals and withdrawals."
    },
    {
      question: "How much can I earn per referral?",
      answer: "You earn 100 KSh for every person who successfully joins KesChain using your referral link and completes their verification. There's no limit to how many people you can refer."
    },
    {
      question: "How do I withdraw my earnings?",
      answer: "You can withdraw your earnings anytime to your M-Pesa account. Simply go to the Withdraw section in your dashboard, enter the amount (minimum 100 KSh), and confirm. Withdrawals are processed instantly."
    },
    {
      question: "Is there a withdrawal limit?",
      answer: "No! You can withdraw any amount above 100 KSh at any time with no restrictions. There are no daily or monthly limits on withdrawals."
    },
    {
      question: "What if my referral doesn't pay the verification fee?",
      answer: "You only earn when someone completes the verification process by paying the 200 KSh fee. If they don't verify, you won't receive the 100 KSh bonus. You can remind them to complete their verification."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const newUserMessage = {
      sender: 'user',
      text: inputMessage,
      quickReplies: []
    };
    setMessages([...messages, newUserMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage);
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleQuickReply = (reply) => {
    const newUserMessage = {
      sender: 'user',
      text: reply,
      quickReplies: []
    };
    setMessages([...messages, newUserMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(reply);
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (message) => {
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes('verify') || lowerMsg.includes('verification')) {
      return {
        sender: 'bot',
        text: "Account verification requires a one-time payment of 200 KSh. This activates your account for referrals and withdrawals. Would you like to proceed with verification?",
        quickReplies: ["How to verify", "Verification fee", "Not now"]
      };
    } else if (lowerMsg.includes('withdraw') || lowerMsg.includes('payment')) {
      return {
        sender: 'bot',
        text: "You can withdraw your earnings anytime to M-Pesa (minimum 100 KSh). Withdrawals are instant with no fees. What specific issue are you having?",
        quickReplies: ["Withdrawal not received", "Minimum amount", "Change M-Pesa number"]
      };
    } else if (lowerMsg.includes('refer') || lowerMsg.includes('bonus')) {
      return {
        sender: 'bot',
        text: "You earn 100 KSh for each verified referral. Share your unique link with friends! Do you need help with your referral link or tracking referrals?",
        quickReplies: ["Get my referral link", "Referral not counted", "How to share"]
      };
    } else if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
      return {
        sender: 'bot',
        text: "Hi there! How can I assist you with KesChain today?",
        quickReplies: ["Account help", "Withdrawal", "Referrals"]
      };
    } else {
      return {
        sender: 'bot',
        text: "I'm sorry, I didn't understand that. Could you please ask about account verification, withdrawals, or referrals?",
        quickReplies: ["Verification", "Withdrawals", "Referrals"]
      };
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="help-center-container">
        <Sidebar />
      <section className="help-center">
        <div className="container">
          <div className="help-header text-center mb-5">
            <h1 className="mb-3">How can we help you?</h1>
            <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Find answers to common questions or chat with our virtual assistant for immediate help
            </p>
          </div>
          
          <div className="help-search mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            <div className="input-group">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Search help articles..."
              />
              <button className="btn btn-primary">
                <FaSearch />
              </button>
            </div>
          </div>
          
          <div className="row g-4 mb-5">
            {helpCards.map((card, index) => (
              <div key={index} className="col-md-4">
                <div className="help-card p-4 h-100">
                  <div className="help-card-icon mb-4">
                    {card.icon}
                  </div>
                  <h3 className="mb-3">{card.title}</h3>
                  <p className="text-muted mb-4">{card.description}</p>
                  <a href={card.link} className="text-primary fw-medium text-decoration-none">
                    View articles <FaArrowRight className="ms-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="faq-section p-4 p-md-5 mb-5">
            <div className="faq-header text-center mb-4">
              <h2 className="mb-3">Frequently Asked Questions</h2>
              <p className="text-muted">Quick answers to common questions about KesChain</p>
            </div>
            
            <div className="accordion mx-auto" style={{ maxWidth: '800px' }}>
              {faqs.map((faq, index) => (
                <div key={index} className="accordion-item mb-3">
                  <div 
                    className={`accordion-header p-3 ${activeAccordion === index ? 'active' : ''}`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <span>{faq.question}</span>
                    <span>{activeAccordion === index ? '-' : '+'}</span>
                  </div>
                  <div 
                    className="accordion-content" 
                    style={{ 
                      maxHeight: activeAccordion === index ? '500px' : '0',
                      padding: activeAccordion === index ? '20px' : '0 20px'
                    }}
                  >
                    <p className="mb-0">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot Container */}
      <div className="chatbot-container">
        <div className="chatbot-toggle" onClick={toggleChatbot}>
          <FaRobot />
        </div>
        
        {isChatbotOpen && (
          <div className="chatbot-window">
            <div className="chatbot-header bg-primary text-white p-3">
              <img 
                src="https://via.placeholder.com/40/4CAF50/FFFFFF" 
                alt="KesBot" 
                className="me-2"
              />
              <div className="chatbot-header-info">
                <h3 className="mb-0">KesBot</h3>
                <p className="mb-0 small opacity-75">Virtual Assistant</p>
              </div>
              <button 
                className="chatbot-close bg-transparent border-0 text-white fs-4"
                onClick={toggleChatbot}
              >
                &times;
              </button>
            </div>
            
            <div className="chatbot-messages p-3">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`chatbot-message d-flex ${message.sender === 'bot' ? 'justify-content-start' : 'justify-content-end'}`}
                >
                  <div 
                    className={`message-content p-3 mb-2 ${message.sender === 'bot' ? 'bg-light' : 'bg-primary text-white'}`}
                  >
                    {message.text}
                    {message.quickReplies && message.quickReplies.length > 0 && (
                      <div className="quick-replies d-flex flex-wrap gap-2 mt-2">
                        {message.quickReplies.map((reply, i) => (
                          <button 
                            key={i}
                            className="quick-reply btn btn-sm"
                            onClick={() => handleQuickReply(reply)}
                          >
                            {reply}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="chatbot-input p-3 border-top">
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Type your question..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button 
                  className="btn btn-primary"
                  onClick={handleSendMessage}
                >
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Help;
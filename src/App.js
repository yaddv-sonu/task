import React, { useState } from 'react';
import './Sidebar.css'; // Import the CSS file for styling

const Sidebar = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        content: inputValue,
        timestamp: new Date().toLocaleTimeString()
      };

      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  return (
    <div className="sidebar">
      <div className="chat-header">
        <h2>Chat</h2>
      </div>
      <div className="chat-messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <div className="avatar"></div>
            <div className="message-content">
              <span className="content">{message.content}</span>
              <span className="timestamp">{message.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Sidebar;

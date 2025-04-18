import React, { useState } from 'react';
import '../styles/commandOutput.css';

/**
 * Terminal input component for entering commands
 * @param {Object} props - Component props
 * @param {Function} props.onSubmit - Function called when a command is submitted
 */
const TerminalInput = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  /**
   * Handle form submission
   * @param {Event} e - Form submission event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    onSubmit(input);
    setInput('');
  };

  /**
   * Handle key press events (backup for Enter key)
   * @param {Event} e - Keydown event
   */
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!input.trim()) return;
      
      onSubmit(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="terminal-input-area">
      <div className="flex">
        <span className="terminal-prompt">&gt;&gt;: </span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          className="terminal-input-field"
          placeholder="Type command (e.g., nyxr help)"
          autoFocus
        />
      </div>
      <button type="submit" className="hidden">Submit</button>
    </form>
  );
};

export { TerminalInput };
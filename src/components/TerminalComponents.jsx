// TerminalHeader.jsx
import React from 'react';
import { formatCommandParts } from '../utils/terminalUtils';

/**
 * Terminal header component showing the terminal identifier
 */
const TerminalHeader = () => {
  return (
    <div className="bg-gray-700 p-2 font-mono text-gray-300">
      605NYX-R
      <span className="float-right">
        <svg className="inline-block w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      </span>
    </div>
  );
};

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
    <form onSubmit={handleSubmit} className="p-2 border-t border-gray-700">
      <div className="flex">
        <span className="text-white font-mono">&gt;&gt;: </span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          className="flex-1 bg-transparent text-red-400 font-mono outline-none ml-1"
          placeholder="Type command (e.g., nyxr help)"
          autoFocus
        />
      </div>
      <button type="submit" className="hidden">Submit</button>
    </form>
  );
};

/**
 * Terminal output component that displays command history
 * @param {Object} props - Component props
 * @param {Array} props.history - Array of history items (commands and responses)
 */
const TerminalOutput = ({ history }) => {
  const outputRef = useRef(null);

  // Auto-scroll to bottom when history changes
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div 
      ref={outputRef} 
      className="flex-1 p-4 font-mono text-green-400 overflow-y-auto"
    >
      {history.map((item, index) => (
        <div key={index} className="mb-1">
          {item.type === 'command' ? (
            <>
              <span className="text-white">&gt;&gt;: </span>
              {(() => {
                const parts = formatCommandParts(item.content);
                return (
                  <>
                    <span className={parts.command.className}>{parts.command.text} </span>
                    {parts.subcommand.text && (
                      <span className={parts.subcommand.className}>{parts.subcommand.text} </span>
                    )}
                    {parts.item.text && (
                      <span className={parts.item.className}>{parts.item.text} </span>
                    )}
                    {parts.input.text && (
                      <span className={parts.input.className}>{parts.input.text}</span>
                    )}
                  </>
                );
              })()}
            </>
          ) : (
            <>
              <span className="text-white">&gt;&gt;&gt; </span>
              {item.content.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
              <span className="text-white">&gt;&gt;: </span>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

/**
 * Welcome message component displayed in the info panel
 * @param {Object} props - Component props
 * @param {string} props.message - Welcome message to display
 */
const WelcomeMessage = ({ message }) => {
  return (
    <div className="bg-gray-900 border-2 border-yellow-500 rounded-md p-4 text-yellow-400 font-mono">
      {message}
    </div>
  );
};

/**
 * Command guide component that shows command syntax and examples
 */
const CommandGuide = () => {
  return (
    <div className="flex-1 bg-gray-900 rounded-md overflow-hidden flex flex-col">
      <div className="bg-red-900 p-2 text-white font-semibold">
        Guide: How to use the commands
      </div>
      <div className="p-4 font-mono text-gray-300 text-sm">
        <div className="mb-4">
          <span className="text-gray-400">{'->'} syntax: </span>
          <span className="text-red-400">command </span>
          <span className="text-blue-400">subcommand </span>
          <span className="text-yellow-400">(item) </span>
          <span className="text-green-400">input</span>
        </div>
        
        <div className="mb-1">
          <span className="text-gray-400">{'->'} </span>
          <span className="text-red-400">command </span>
          {'->'} <span className="text-yellow-400">{'{'}</span><span className="text-red-400">nyxr</span><span className="text-yellow-400">{'}'}</span>
        </div>
        
        <div className="mb-1">
          <span className="text-gray-400">{'->'} </span>
          <span className="text-blue-400">subcommand </span>
          {'->'} <span className="text-yellow-400">{'{'}</span><span className="text-blue-400">start, show</span><span className="text-yellow-400">{'}'}</span>
        </div>
        
        <div className="mb-1">
          <span className="text-gray-400">{'->'} </span>
          <span className="text-green-400">input </span>
          {'->'} <span className="text-yellow-400">{'{'}</span><span className="text-green-400">name, education, hobbies</span><span className="text-yellow-400">{'}'}</span>
        </div>
        
        <div className="mb-4">
          <span className="text-gray-400">{'->'} </span>
          <span className="text-green-600">output </span>
          {'->'} <span className="text-green-400">Well, hello there!</span>
        </div>
        
        <div className="mb-1">
          <span className="text-gray-400">{'->'} Start with this (&gt;&gt;: </span>
          <span className="text-red-400">nyxr </span>
          <span className="text-blue-400">start</span>
          <span className="text-gray-400">)</span>
        </div>
        
        <div className="mb-4">
          <span className="text-gray-400">{'->'} </span>
          <span className="text-green-400">Well, hello there!</span>
        </div>
        
        <div className="mb-1">
          <span className="text-gray-400">{'->'} Examples:</span>
        </div>
        
        <div className="ml-2 mb-1">
          <span className="text-gray-400">&gt;&gt;: </span>
          <span className="text-red-400">nyxr </span>
          <span className="text-blue-400">show </span>
          <span className="text-yellow-400">contact</span>
        </div>
        
        <div className="ml-2 mb-1">
          <span className="text-gray-400">&gt;&gt;: </span>
          <span className="text-red-400">nyxr </span>
          <span className="text-blue-400">list </span>
          <span className="text-yellow-400">skills</span>
        </div>
        
        <div className="ml-2 mb-1">
          <span className="text-gray-400">&gt;&gt;: </span>
          <span className="text-red-400">nyxr </span>
          <span className="text-blue-400">detail </span>
          <span className="text-yellow-400">project </span>
          <span className="text-green-400">Modelxyz</span>
        </div>
        
        <div className="ml-2 mb-1">
          <span className="text-gray-400">&gt;&gt;: </span>
          <span className="text-red-400">nyxr </span>
          <span className="text-blue-400">check </span>
          <span className="text-yellow-400">availability</span>
        </div>
        
        <div className="ml-2 mb-1">
          <span className="text-gray-400">&gt;&gt;: </span>
          <span className="text-red-400">nyxr </span>
          <span className="text-blue-400">help</span>
        </div>
      </div>
    </div>
  );
};

/**
 * Info panel component that contains welcome message and command guide
 * @param {Object} props - Component props
 * @param {string} props.welcomeMessage - Welcome message to display
 */
const InfoPanel = ({ welcomeMessage }) => {
  return (
    <div className="w-96 flex flex-col space-y-4">
      <WelcomeMessage message={welcomeMessage} />
      <CommandGuide />
    </div>
  );
};

// Add missing import statements
import { useState, useEffect, useRef } from 'react';
import { formatCommandParts } from '../utils/terminalUtils';

// Export all components
export { 
  TerminalHeader, 
  TerminalInput, 
  TerminalOutput, 
  WelcomeMessage, 
  CommandGuide, 
  InfoPanel 
};
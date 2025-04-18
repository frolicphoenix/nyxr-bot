import React, { useEffect, useRef } from 'react';
import { TerminalHeader } from './TerminalHeader';
import { TerminalInput } from './TerminalInput';
import { TerminalOutput } from './TerminalOutput';
import { InfoPanel } from './InfoPanel';
import useTerminalHistory from '../hooks/useTerminalHistory';
import processCommand from '../utils/commandProcessor';
import { getInitialGreeting } from '../utils/terminalUtils';
import terminalData from '../data/terminalData';
import '../styles/terminal.css';

/**
 * Main NYX Terminal Component
 * 
 * This is the main container component that combines all terminal elements
 * and manages the terminal state and interactions.
 */
const NyxTerminal = () => {
  // Initialize terminal history with greeting
  const { history, processCommand: processAndAddToHistory } = useTerminalHistory(getInitialGreeting());
  const bottomRef = useRef(null);
  
  // Handle command submission from input
  const handleSubmit = (inputCommand) => {
    processAndAddToHistory(inputCommand, processCommand);
  };

  // Auto-scroll to bottom when history changes
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className="terminal-container">
      {/* Header */}
      <div className="terminal-header">
        FOENYX
      </div>
      
      <div className="terminal-body">
        {/* Terminal */}
        <div className="terminal-main">
          <TerminalHeader />
          
          <TerminalOutput history={history} />
          
          <TerminalInput onSubmit={handleSubmit} />
          
          <div ref={bottomRef} />
        </div>
        
        {/* Info Panels */}
        <InfoPanel welcomeMessage={terminalData.welcomeMessage} />
      </div>
    </div>
  );
};

export default NyxTerminal;
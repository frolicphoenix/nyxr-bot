/**
 * Custom hook for managing terminal history
 * 
 * This hook handles the terminal history state and provides methods
 * to add commands and responses to the history.
 */

import { useState } from 'react';

/**
 * Custom hook to manage terminal history state
 * @param {Array} initialHistory - Optional initial history items
 * @returns {Object} History state and methods to manage it
 */
const useTerminalHistory = (initialHistory = []) => {
  // State for the terminal history
  const [history, setHistory] = useState(initialHistory);

  /**
   * Add a command to the history
   * @param {string} command - The command text entered by the user
   */
  const addCommand = (command) => {
    setHistory(prev => [...prev, { type: 'command', content: command }]);
  };

  /**
   * Add a response to the history
   * @param {string} response - The response text to display
   */
  const addResponse = (response) => {
    setHistory(prev => [...prev, { type: 'response', content: response }]);
  };

  /**
   * Process a command and add both the command and its response to history
   * @param {string} command - The command text
   * @param {Function} processor - Function that processes the command and returns a response
   */
  const processCommand = (command, processor) => {
    // Don't process empty commands
    if (!command.trim()) return;
    
    // Add the command to history
    addCommand(command);
    
    // Process the command and get the response
    const response = processor(command);
    
    // Add the response to history
    addResponse(response);
  };

  /**
   * Clear the entire terminal history
   */
  const clearHistory = () => {
    setHistory([]);
  };

  return {
    history,
    addCommand,
    addResponse,
    processCommand,
    clearHistory
  };
};

export default useTerminalHistory;
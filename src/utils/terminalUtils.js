/**
 * Terminal Utilities
 * 
 * Helper functions for the terminal component
 */

/**
 * Formats command parts with appropriate colors using class names
 * @param {string} command - Full command string
 * @returns {Object} Object with parts and their respective CSS classes
 */
export const formatCommandParts = (command) => {
  const parts = command.trim().split(' ');
  
  return {
    command: {
      text: parts[0] || '',
      className: 'text-red-400'
    },
    subcommand: {
      text: parts[1] || '',
      className: 'text-blue-400'
    },
    item: {
      text: parts[2] || '',
      className: 'text-yellow-400'
    },
    input: {
      text: parts.slice(3).join(' ') || '',
      className: 'text-green-400'
    }
  };
};

/**
 * Automatically scroll an element to the bottom
 * Useful for keeping terminal output scrolled to the latest command
 * @param {React.RefObject} ref - Reference to the element to scroll
 * @param {Object} options - Scroll behavior options
 */
export const scrollToBottom = (ref, options = { behavior: 'smooth' }) => {
  if (ref && ref.current) {
    ref.current.scrollTop = ref.current.scrollHeight;
  }
};

/**
 * Parse a multi-line response for terminal display
 * @param {string} response - Response text that may contain newlines
 * @returns {Array} Array of line objects ready for rendering
 */
export const parseMultilineResponse = (response) => {
  if (!response) return [];
  
  return response.split('\n').map((line, index) => ({
    id: index,
    text: line
  }));
};

/**
 * Helper method to determine if command is valid based on format
 * @param {string} command - Command to validate
 * @returns {boolean} Whether command appears valid
 */
export const isValidCommand = (command) => {
  const parts = command.trim().split(' ');
  
  // Basic validation - must start with 'nyxr'
  if (parts[0] !== 'nyxr') return false;
  
  // Must have at least a subcommand
  if (!parts[1]) return false;
  
  // Valid subcommands
  const validSubcommands = ['start', 'show', 'list', 'detail', 'check', 'help'];
  if (!validSubcommands.includes(parts[1])) return false;
  
  return true;
};

/**
 * Returns initial terminal greeting to be shown at start
 * @returns {Array} Array of history items for initial greeting
 */
export const getInitialGreeting = () => {
  return [
    { type: 'command', content: 'nyxr start' },
    { type: 'response', content: 'Well, hello there! I created this web app for fun. This is basically a chat-bot version of myself (portfolio and hobbies). It also lists my top list of anime and manga. Go ahead, try it out~!' },
  ];
};
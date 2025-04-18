import React from 'react';

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

export { WelcomeMessage };
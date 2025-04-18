import React from 'react';
import { WelcomeMessage } from './WelcomeMessage';
import { CommandGuide } from './CommandGuide';

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

export { InfoPanel };
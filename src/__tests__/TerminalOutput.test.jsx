import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TerminalOutput } from '../components/TerminalOutput';

describe('TerminalOutput Component', () => {
  const mockHistory = [
    { type: 'command', content: 'nyxr start' },
    { type: 'response', content: 'Welcome message' }
  ];

  test('renders command history correctly', () => {
    render(<TerminalOutput history={mockHistory} />);
    
    expect(screen.getByText('nyxr')).toBeInTheDocument();
    expect(screen.getByText('start')).toBeInTheDocument();
    expect(screen.getByText('Welcome message')).toBeInTheDocument();
  });

  test('renders empty history without errors', () => {
    const { container } = render(<TerminalOutput history={[]} />);
    // Use container query instead of role since the div doesn't have a role
    const outputContainer = container.querySelector('.flex-1');
    expect(outputContainer).toBeInTheDocument();
  });
});
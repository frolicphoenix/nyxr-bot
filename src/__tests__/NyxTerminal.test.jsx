import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import NyxTerminal from '../components/NyxTerminal';

// Mock the scrollIntoView method
Element.prototype.scrollIntoView = vi.fn();

describe('NyxTerminal Component', () => {
  test('renders the main terminal container', () => {
    render(<NyxTerminal />);
    expect(screen.getByText('FOENYX')).toBeInTheDocument();
    expect(screen.getByText('605NYX-R')).toBeInTheDocument();
  });

  test('displays initial greeting on load', () => {
    render(<NyxTerminal />);
    // Use getAllByText since there are multiple matching elements
    const greetingElements = screen.getAllByText(/Well, hello there!/i);
    expect(greetingElements.length).toBeGreaterThan(0);
    expect(greetingElements[0]).toBeInTheDocument();
  });

  test('processes command and shows response', () => {
    render(<NyxTerminal />);
    const input = screen.getByPlaceholderText(/Type command/i);
    fireEvent.change(input, { target: { value: 'nyxr help' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    
    // Check if help text is displayed
    expect(screen.getByText(/Available commands:/i)).toBeInTheDocument();
  });
});
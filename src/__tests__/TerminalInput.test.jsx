import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { TerminalInput } from '../components/TerminalInput';

describe('TerminalInput Component', () => {
  test('renders input field correctly', () => {
    const mockSubmit = vi.fn();
    render(<TerminalInput onSubmit={mockSubmit} />);
    
    const input = screen.getByPlaceholderText(/Type command/i);
    expect(input).toBeInTheDocument();
  });

  test('calls onSubmit when Enter key is pressed', () => {
    const mockSubmit = vi.fn();
    render(<TerminalInput onSubmit={mockSubmit} />);
    
    const input = screen.getByPlaceholderText(/Type command/i);
    fireEvent.change(input, { target: { value: 'nyxr test' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    
    expect(mockSubmit).toHaveBeenCalledWith('nyxr test');
    expect(input.value).toBe(''); // Input should be cleared
  });

  test('does not call onSubmit for empty input', () => {
    const mockSubmit = vi.fn();
    render(<TerminalInput onSubmit={mockSubmit} />);
    
    const input = screen.getByPlaceholderText(/Type command/i);
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    
    expect(mockSubmit).not.toHaveBeenCalled();
  });
});
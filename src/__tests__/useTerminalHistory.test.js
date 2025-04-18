import { renderHook, act } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import useTerminalHistory from '../hooks/useTerminalHistory';

describe('useTerminalHistory Hook', () => {
  test('initializes with provided history', () => {
    const initialHistory = [{ type: 'command', content: 'test command' }];
    const { result } = renderHook(() => useTerminalHistory(initialHistory));
    
    expect(result.current.history).toEqual(initialHistory);
  });

  test('adds command to history', () => {
    const { result } = renderHook(() => useTerminalHistory([]));
    
    act(() => {
      result.current.addCommand('test command');
    });
    
    expect(result.current.history).toEqual([
      { type: 'command', content: 'test command' }
    ]);
  });

  test('adds response to history', () => {
    const { result } = renderHook(() => useTerminalHistory([]));
    
    act(() => {
      result.current.addResponse('test response');
    });
    
    expect(result.current.history).toEqual([
      { type: 'response', content: 'test response' }
    ]);
  });

  test('processes command with provided processor', () => {
    const mockProcessor = vi.fn().mockReturnValue('processed result');
    const { result } = renderHook(() => useTerminalHistory([]));
    
    act(() => {
      result.current.processCommand('test command', mockProcessor);
    });
    
    expect(mockProcessor).toHaveBeenCalledWith('test command');
    expect(result.current.history).toEqual([
      { type: 'command', content: 'test command' },
      { type: 'response', content: 'processed result' }
    ]);
  });

  test('clears history', () => {
    const initialHistory = [{ type: 'command', content: 'test command' }];
    const { result } = renderHook(() => useTerminalHistory(initialHistory));
    
    act(() => {
      result.current.clearHistory();
    });
    
    expect(result.current.history).toEqual([]);
  });
});
// terminalUtils.test.js
import { formatCommandParts, getInitialGreeting, isValidCommand } from '../utils/terminalUtils';

describe('Terminal Utilities', () => {
  test('formatCommandParts parses command correctly', () => {
    const result = formatCommandParts('nyxr detail project TestProject');
    
    expect(result.command.text).toBe('nyxr');
    expect(result.subcommand.text).toBe('detail');
    expect(result.item.text).toBe('project');
    expect(result.input.text).toBe('TestProject');
  });

  test('formatCommandParts handles empty parts gracefully', () => {
    const result = formatCommandParts('nyxr');
    
    expect(result.command.text).toBe('nyxr');
    expect(result.subcommand.text).toBe('');
    expect(result.item.text).toBe('');
    expect(result.input.text).toBe('');
  });

  test('getInitialGreeting returns expected history items', () => {
    const greeting = getInitialGreeting();
    
    expect(greeting).toHaveLength(2);
    expect(greeting[0].type).toBe('command');
    expect(greeting[0].content).toBe('nyxr start');
    expect(greeting[1].type).toBe('response');
  });

  test('isValidCommand validates correct commands', () => {
    expect(isValidCommand('nyxr start')).toBe(true);
    expect(isValidCommand('nyxr help')).toBe(true);
    expect(isValidCommand('nyxr show contact')).toBe(true);
  });

  test('isValidCommand rejects invalid commands', () => {
    expect(isValidCommand('invalid')).toBe(false);
    expect(isValidCommand('nyxr invalidsubcommand')).toBe(false);
    expect(isValidCommand('')).toBe(false);
  });
});
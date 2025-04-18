import { describe, test, expect, vi } from 'vitest';
import processCommand from '../utils/commandProcessor';

// Mock the terminal data
vi.mock('../data/terminalData', () => ({
  default: {
    welcomeMessage: 'Test welcome message',
    contact: {
      email: 'test@example.com',
      github: 'github.com/test',
      linkedin: 'linkedin.com/in/test'
    },
    skills: ['Skill1', 'Skill2'],
    projects: {
      TestProject: {
        description: 'Test description',
        technologies: ['Tech1', 'Tech2'],
        status: 'Completed'
      }
    },
    anime: [
      { title: 'Test Anime', rating: '10/10', genres: ['Action'] }
    ],
    hobbies: ['Hobby1', 'Hobby2']
  }
}));

describe('Command Processor', () => {
  test('processes start command correctly', () => {
    const result = processCommand('nyxr start');
    expect(result).toBe('Test welcome message');
  });

  test('processes help command correctly', () => {
    const result = processCommand('nyxr help');
    expect(result).toContain('Available commands:');
  });

  test('processes show command correctly', () => {
    const result = processCommand('nyxr show contact');
    expect(result).toContain('test@example.com');
  });

  test('processes list command correctly', () => {
    const result = processCommand('nyxr list skills');
    expect(result).toBe('Skill1, Skill2');
  });

  test('processes detail command correctly', () => {
    const result = processCommand('nyxr detail project TestProject');
    expect(result).toContain('Test description');
  });

  test('handles unknown command gracefully', () => {
    const result = processCommand('unknown command');
    expect(result).toContain('Unknown command');
  });

  test('handles unknown subcommand gracefully', () => {
    const result = processCommand('nyxr unknown');
    expect(result).toContain('Unknown subcommand');
  });
});
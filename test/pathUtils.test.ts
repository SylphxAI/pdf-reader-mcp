import path from 'node:path';
import { ErrorCode, McpError } from '@modelcontextprotocol/sdk/types.js';
import { describe, expect, it } from 'vitest'; // Removed beforeEach, vi
import { PROJECT_ROOT, resolvePath } from '../src/utils/pathUtils.js'; // Add .js extension

// Mock PROJECT_ROOT for consistent testing if needed, or use the actual one
// For this test, using the actual PROJECT_ROOT derived from process.cwd() is likely fine,
// but be aware it depends on where the test runner executes.
// If consistency across environments is critical, mocking might be better.
// vi.mock('../src/utils/pathUtils', async (importOriginal) => {
//   const original = await importOriginal();
//   return {
//     ...original,
//     PROJECT_ROOT: '/mock/project/root', // Example mock path
//   };
// });

describe('resolvePath Utility', () => {
  it('should resolve a valid relative path correctly', () => {
    const userPath = 'some/file.txt';
    const expectedPath = path.resolve(PROJECT_ROOT, userPath);
    expect(resolvePath(userPath)).toBe(expectedPath);
  });

  it('should resolve paths with "." correctly', () => {
    const userPath = './some/./other/file.txt';
    const expectedPath = path.resolve(PROJECT_ROOT, 'some/other/file.txt');
    expect(resolvePath(userPath)).toBe(expectedPath);
  });

  it('should resolve paths with ".." correctly within the project root', () => {
    const userPath = 'some/folder/../other/file.txt';
    const expectedPath = path.resolve(PROJECT_ROOT, 'some/other/file.txt');
    expect(resolvePath(userPath)).toBe(expectedPath);
  });

  it('should allow path traversal with relative paths', () => {
    const userPath = '../outside/secret.txt';
    const expectedPath = path.resolve(PROJECT_ROOT, userPath);
    expect(resolvePath(userPath)).toBe(expectedPath);
  });

  it('should allow path traversal with multiple ".." components', () => {
    // Construct a path that uses '..' many times
    const levelsUp = PROJECT_ROOT.split(path.sep).filter(Boolean).length + 2; // Go up more levels than the root has
    const userPath = path.join(...(Array(levelsUp).fill('..') as string[]), 'secret.txt'); // Cast array to string[]
    const expectedPath = path.resolve(PROJECT_ROOT, userPath);
    expect(resolvePath(userPath)).toBe(expectedPath);
  });

  it('should accept absolute paths and return them normalized', () => {
    const userPath = path.resolve(PROJECT_ROOT, 'absolute/file.txt'); // An absolute path
    const userPathPosix = '/absolute/file.txt'; // POSIX style absolute path
    const userPathWin = 'C:\\absolute\\file.txt'; // Windows style absolute path

    // Should return the normalized absolute path
    expect(resolvePath(userPath)).toBe(path.normalize(userPath));

    // Test specifically for POSIX and Windows style absolute paths if needed
    if (path.sep === '/') {
      // POSIX-like
      expect(resolvePath(userPathPosix)).toBe(path.normalize(userPathPosix));
    } else {
      // Windows-like
      expect(resolvePath(userPathWin)).toBe(path.normalize(userPathWin));
    }
  });

  it('should throw McpError for non-string input', () => {
    // Corrected line number for context
    const userPath = 123 as unknown as string; // Use unknown then cast to string for test
    expect(() => resolvePath(userPath)).toThrow(McpError);
    expect(() => resolvePath(userPath)).toThrow('Path must be a string.');
    try {
      resolvePath(userPath);
    } catch (e) {
      expect(e).toBeInstanceOf(McpError);
      expect((e as McpError).code).toBe(ErrorCode.InvalidParams);
    }
  });

  it('should handle empty string input', () => {
    const userPath = '';
    const expectedPath = path.resolve(PROJECT_ROOT, ''); // Should resolve to the project root itself
    expect(resolvePath(userPath)).toBe(expectedPath);
  });
});

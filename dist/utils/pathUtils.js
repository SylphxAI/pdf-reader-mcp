// Removed unused import: import { fileURLToPath } from 'url';
import path from 'node:path';
import { ErrorCode, McpError } from '@modelcontextprotocol/sdk/types.js';
// Use the server's current working directory as the project root.
// This relies on the process launching the server to set the CWD correctly.
export const PROJECT_ROOT = process.cwd();
console.info(`[Filesystem MCP - pathUtils] Project Root determined from CWD: ${PROJECT_ROOT}`); // Use info instead of log
/**
 * Resolves a user-provided path, accepting both absolute and relative paths.
 * Relative paths are resolved against the current working directory (PROJECT_ROOT).
 * @param userPath The path provided by the user (absolute or relative).
 * @returns The resolved absolute path.
 */
export const resolvePath = (userPath) => {
    if (typeof userPath !== 'string') {
        throw new McpError(ErrorCode.InvalidParams, 'Path must be a string.');
    }
    const normalizedUserPath = path.normalize(userPath);
    // If absolute path, return it normalized
    if (path.isAbsolute(normalizedUserPath)) {
        return normalizedUserPath;
    }
    // If relative path, resolve against the PROJECT_ROOT (cwd)
    return path.resolve(PROJECT_ROOT, normalizedUserPath);
};

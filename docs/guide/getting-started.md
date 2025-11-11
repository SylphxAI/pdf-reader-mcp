# Getting Started

This guide assumes you have an MCP client or host environment capable of launching and communicating with the PDF Reader MCP Server.

## 1. Launch the Server

Ensure the server is launched with its **working directory set to the root of the project** containing the PDF files you want to access.

- **If installed via npm/pnpm:** Your MCP host might manage this automatically via `npx @sylphx/pdf-reader-mcp`.
- **If running standalone:** `cd /path/to/your/project && node /path/to/pdf-reader-mcp/build/index.js`
- **If using Docker:** `docker run -i --rm -v \"/path/to/your/project:/app\" sylphx/pdf-reader-mcp:latest`

## 2. Using the `read_pdf` Tool

The server provides a single primary tool: `read_pdf`.

**Tool Input Schema:**

The `read_pdf` tool accepts an object with the following properties:

- `sources` (Array\<Object\>, required): An array of PDF sources to process. Each source object must contain either a `path` or a `url`.
  - `path` (string, optional): Relative path to the local PDF file within the project root.
  - `url` (string, optional): URL of the PDF file.
  - `pages` (Array\<number\> | string, optional): Extract text only from specific pages (1-based) or ranges (e.g., `'1-3, 5'`). If provided, `include_full_text` is ignored for this source.
- `include_full_text` (boolean, optional, default: `false`): Include the full text content of each PDF (only if `pages` is not specified for that source).
- `include_metadata` (boolean, optional, default: `true`): Include metadata and info objects for each PDF.
- `include_page_count` (boolean, optional, default: `true`): Include the total number of pages for each PDF.

_(See the API Reference (once generated) for the full JSON schema)_

**Example MCP Request (Get metadata and page count for one PDF):**

```json
{
  "tool_name": "read_pdf",
  "arguments": {
    "sources": [{ "path": "./documents/report.pdf" }],
    "include_metadata": true,
    "include_page_count": true,
    "include_full_text": false
  }
}
```

**Example MCP Request (Get text from page 2 of one PDF, full text of another):**

```json
{
  "tool_name": "read_pdf",
  "arguments": {
    "sources": [
      {
        "path": "./invoices/inv-001.pdf",
        "pages": [2] // Get only page 2 text
      },
      {
        "url": "https://example.com/whitepaper.pdf"
        // No 'pages', so 'include_full_text' applies
      }
    ],
    "include_metadata": false,
    "include_page_count": false,
    "include_full_text": true // Applies only to the URL source
  }
}
```

## 3. Understanding the Response

The response will be an array named `results`, with each element corresponding to a source object in the request array. Each result object contains:

- `source` (string): The original path or URL provided in the request.
- `success` (boolean): Indicates if processing this source was successful.
- `data` (Object, optional): Present if `success` is `true`. Contains the requested data:
  - `num_pages` (number, optional): Total page count (if `include_page_count` was true).
  - `info` (Object, optional): PDF information dictionary (if `include_metadata` was true).
  - `metadata` (Object, optional): PDF metadata (if `include_metadata` was true).
  - `page_texts` (Array\<Object\>, optional): Array of objects, each with `page` (number) and `text` (string), for pages where text was extracted (if `pages` was specified or `include_full_text` was true without `pages`).
- `error` (Object, optional): Present if `success` is `false`. Contains:
  - `code` (string): An error code (e.g., `FileNotFound`, `InvalidRequest`, `PdfParsingError`, `DownloadError`, `UnknownError`).
  - `message` (string): A description of the error.

_(See the API Reference (once generated) for detailed response structure and error codes.)_

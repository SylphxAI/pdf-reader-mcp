<div align="center">

# 📄 PDF Reader MCP Server

### The Ultimate PDF Processing Engine for AI Agents

[![CI/CD](https://github.com/sylphxltd/pdf-reader-mcp/actions/workflows/ci.yml/badge.svg)](https://github.com/sylphxltd/pdf-reader-mcp/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/sylphxltd/pdf-reader-mcp/graph/badge.svg?token=VYRQFB40UN)](https://codecov.io/gh/sylphxltd/pdf-reader-mcp)
[![npm version](https://badge.fury.io/js/%40sylphx%2Fpdf-reader-mcp.svg)](https://www.npmjs.com/package/@sylphx/pdf-reader-mcp)
[![Downloads](https://img.shields.io/npm/dm/@sylphx/pdf-reader-mcp.svg)](https://www.npmjs.com/package/@sylphx/pdf-reader-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<p align="center">
<a href="https://mseep.ai/app/sylphxltd-pdf-reader-mcp">
<img src="https://mseep.net/pr/sylphxltd-pdf-reader-mcp-badge.png" alt="MseeP.ai Security Assessment" width="240"/>
</a>
</p>

**Trusted by developers worldwide** • **Battle-tested** • **Production-ready**

[Features](#-features) • [Quick Start](#-quick-start) • [Documentation](#-documentation) • [Examples](#-usage-examples)

</div>

---

## 🎯 What Makes Us Different

<table>
<tr>
<td width="33%" align="center">
<h3>⚡ Blazingly Fast</h3>
<p><strong>5-10x speedup</strong> with parallel processing<br/>Process 50-page PDFs in seconds</p>
</td>
<td width="33%" align="center">
<h3>🎯 Intelligent</h3>
<p><strong>Y-coordinate ordering</strong><br/>Content flows naturally for AI models</p>
</td>
<td width="33%" align="center">
<h3>🔒 Flexible & Secure</h3>
<p><strong>Absolute & relative paths</strong><br/>Works with any file location</p>
</td>
</tr>
</table>

> 🚀 **Built for scale** - From hobbyist projects to enterprise production environments

## ✨ Features

<table>
<tr>
<td width="50%">

### 📄 Core Capabilities
- ✅ **Text Extraction** - Full document or specific pages
- ✅ **Image Extraction** - Base64-encoded with metadata
- ✅ **Content Ordering** - Y-coordinate based layout preservation
- ✅ **Metadata Extraction** - Author, title, dates, properties
- ✅ **Page Counting** - Fast enumeration without loading
- ✅ **Dual Sources** - Local files & HTTP/HTTPS URLs
- ✅ **Batch Processing** - Multiple PDFs in parallel

</td>
<td width="50%">

### 🚀 Advanced Features
- ✅ **5-10x Performance** - Parallel page processing
- ✅ **Smart Pagination** - Ranges like "1-5,10-15,20"
- ✅ **Multi-Format Images** - RGB, RGBA, Grayscale
- ✅ **Path Flexibility** - Windows, Unix, relative paths
- ✅ **Error Resilience** - Per-page isolation
- ✅ **Large File Support** - Efficient memory management
- ✅ **Type Safe** - Full TypeScript, strict mode

</td>
</tr>
</table>

## 🆕 What's New in v1.3.0

<div align="center">

### 🎉 Absolute Paths Now Supported!

No more `"Absolute paths are not allowed"` errors

</div>

```json
// Windows - Both work!
{ "path": "C:\\Users\\John\\Documents\\report.pdf" }
{ "path": "C:/Users/John/Documents/report.pdf" }

// Unix/Mac
{ "path": "/home/john/documents/report.pdf" }
{ "path": "/Users/john/Documents/report.pdf" }

// Relative (still works as before)
{ "path": "documents/report.pdf" }
```

**Other Improvements:**
- 🐛 Fixed Zod validation error handling
- 📦 Updated all dependencies to latest versions
- ✅ 103 tests passing, 94%+ coverage maintained

<details>
<summary><strong>📋 Full Changelog</strong></summary>

### v1.2.0 - Content Ordering
- Y-coordinate based text and image ordering
- Natural reading flow for AI models
- Intelligent line grouping

### v1.1.0 - Image Extraction & Performance
- Base64-encoded image extraction
- 10x speedup with parallel processing
- Comprehensive test coverage (94%+)

[View Full Changelog →](./CHANGELOG.md)

</details>

---

## 📦 Installation

<table>
<tr>
<td width="33%" align="center">

### ⚡ Quick Start
**Zero install, try immediately**

```bash
npx @sylphx/pdf-reader-mcp
```

</td>
<td width="33%" align="center">

### 📦 Package Manager
**Recommended for projects**

```bash
pnpm add @sylphx/pdf-reader-mcp
```

</td>
<td width="33%" align="center">

### 🎯 Smithery
**Easiest for Claude Desktop**

```bash
npx -y @smithery/cli install \
  @sylphx/pdf-reader-mcp \
  --client claude
```

</td>
</tr>
</table>

### ⚙️ Configuration

Add to your MCP client configuration (Claude Desktop, Cursor, Cline):

```json
{
  "mcpServers": {
    "pdf-reader-mcp": {
      "command": "npx",
      "args": ["@sylphx/pdf-reader-mcp"]
    }
  }
}
```

<details>
<summary><strong>🔧 Advanced Configuration</strong></summary>

**Custom working directory:**
```json
{
  "mcpServers": {
    "pdf-reader-mcp": {
      "command": "npx",
      "args": ["@sylphx/pdf-reader-mcp"],
      "cwd": "/path/to/your/documents"
    }
  }
}
```

**Local development:**
```bash
git clone https://github.com/sylphxltd/pdf-reader-mcp.git
cd pdf-reader-mcp
pnpm install && pnpm build
```

Then use `node dist/index.js` in your configuration.

</details>

---

## 🚀 Usage Examples

### 1️⃣ Absolute Paths (NEW!)

<table>
<tr>
<td width="50%">

**Windows:**
```json
{
  "sources": [{
    "path": "C:\\Reports\\Q4-2024.pdf"
  }],
  "include_full_text": true
}
```

</td>
<td width="50%">

**Unix/Mac:**
```json
{
  "sources": [{
    "path": "/home/user/docs/report.pdf"
  }],
  "include_full_text": true
}
```

</td>
</tr>
</table>

### 2️⃣ Smart Page Selection

```json
{
  "sources": [{
    "path": "documents/annual-report.pdf",
    "pages": "1-5,10,15-20"  // Ranges + individual pages
  }],
  "include_full_text": true,
  "include_metadata": true
}
```

### 3️⃣ Image Extraction with Natural Ordering

```json
{
  "sources": [{
    "path": "presentation.pdf",
    "pages": [1, 2, 3]
  }],
  "include_images": true,
  "include_full_text": true
}
```

**Response includes:**
- ✅ Text and images in **exact document order** (Y-coordinate sorted)
- ✅ Base64-encoded images with metadata (width, height, format)
- ✅ Natural reading flow preserved for AI comprehension

### 4️⃣ Remote URLs

```json
{
  "sources": [{
    "url": "https://arxiv.org/pdf/2301.00001.pdf"
  }],
  "include_full_text": true
}
```

### 5️⃣ Batch Processing

```json
{
  "sources": [
    { "path": "C:\\Reports\\Q1.pdf", "pages": "1-10" },
    { "path": "/home/user/Q2.pdf", "pages": "1-10" },
    { "url": "https://example.com/Q3.pdf" }
  ],
  "include_full_text": true
}
```

**⚡ All PDFs processed in parallel for maximum performance!**

### 6️⃣ Metadata Only (Lightning Fast)

```json
{
  "sources": [{ "path": "large-document.pdf" }],
  "include_metadata": true,
  "include_page_count": true,
  "include_full_text": false
}
```

---

## 📖 Advanced Usage

<details>
<summary><strong>📐 Content Ordering (Y-Coordinate Based)</strong></summary>

### How It Works

Our revolutionary Y-coordinate based ordering ensures AI models receive content in natural reading sequence:

```
Document Layout (by Y-coordinate):
┌─────────────────────────┐
│ [Title Text]      Y:100 │
│ [Chart Image]     Y:150 │
│ [Analysis Text]   Y:400 │
│ [Photo A]         Y:500 │
│ [Photo B]         Y:550 │
│ [Conclusion]      Y:750 │
└─────────────────────────┘

Content Parts Returned (Ordered):
[
  { type: "text", text: "Title..." },
  { type: "image", data: "base64..." },  // Chart
  { type: "text", text: "Analysis..." },
  { type: "image", data: "base64..." },  // Photo A
  { type: "image", data: "base64..." },  // Photo B
  { type: "text", text: "Conclusion..." }
]
```

**Benefits:**
- ✅ AI understands spatial relationships
- ✅ Natural document comprehension
- ✅ Perfect for vision-enabled models (GPT-4V, Claude 3)
- ✅ Automatic multi-line text grouping

</details>

<details>
<summary><strong>🖼️ Image Extraction Deep Dive</strong></summary>

### Image Response Format

```json
{
  "images": [
    {
      "page": 1,
      "index": 0,
      "width": 1920,
      "height": 1080,
      "format": "rgb",
      "data": "iVBORw0KGgoAAAANSUhEUgAA..."
    }
  ]
}
```

### Supported Formats

| Format | Description | Use Case |
|--------|-------------|----------|
| **RGB** | Standard color | Most common, photos |
| **RGBA** | With transparency | Graphics, overlays |
| **Grayscale** | Black & white | Documents, scans |

**Detected automatically:** JPEG, PNG, and other embedded formats

### Performance Tips

- 🔸 Use `pages` parameter to limit scope
- 🔸 Set `include_images: false` (default) for text-only
- 🔸 Images increase response size significantly
- 🔸 Combine with pagination for large documents

</details>

<details>
<summary><strong>📂 Path Configuration Best Practices</strong></summary>

### When to Use Each

**Absolute Paths** (v1.3.0+)
```json
// ✅ User file selections (drag & drop, file picker)
{ "path": "C:\\Users\\John\\Downloads\\invoice.pdf" }

// ✅ System-wide file access
{ "path": "/etc/documents/config.pdf" }
```

**Relative Paths**
```json
// ✅ Project files (version controlled, portable)
{ "path": "docs/architecture.pdf" }

// ✅ Workspace-relative files
{ "path": "./reports/2024/Q1.pdf" }
```

### Windows Path Handling

Both forward slashes and backslashes work:

```json
{ "path": "C:\\Users\\John\\file.pdf" }  // ✅ Works
{ "path": "C:/Users/John/file.pdf" }     // ✅ Also works!
```

The server automatically normalizes paths.

</details>

<details>
<summary><strong>📊 Working with Large PDFs</strong></summary>

### Strategy 1: Page Ranges

```json
{
  "sources": [
    { "path": "500-page-manual.pdf", "pages": "1-20" }
  ]
}
```

### Strategy 2: Progressive Loading

```json
// Step 1: Get page count
{
  "sources": [{ "path": "large.pdf" }],
  "include_page_count": true,
  "include_full_text": false
}

// Step 2: Extract sections as needed
{
  "sources": [{ "path": "large.pdf", "pages": "50-75" }]
}
```

### Strategy 3: Parallel Batching

```json
{
  "sources": [
    { "path": "large.pdf", "pages": "1-50" },
    { "path": "large.pdf", "pages": "51-100" },
    { "path": "large.pdf", "pages": "101-150" }
  ]
}
```

**⚡ Server processes all batches in parallel!**

</details>

---

## 🔧 Troubleshooting

<table>
<tr>
<td width="50%">

### ❌ "Absolute paths are not allowed"

**Solution:** Upgrade to v1.3.0+

```bash
npm update @sylphx/pdf-reader-mcp
# or
npx @sylphx/pdf-reader-mcp@latest
```

Restart your MCP client completely.

</td>
<td width="50%">

### ❌ "File not found" errors

**Check:**
1. File exists at path
2. Correct working directory
3. File permissions

**For absolute paths:**
```json
{ "path": "C:\\Full\\Path\\To\\file.pdf" }
```

**For relative paths, set `cwd`:**
```json
{
  "pdf-reader-mcp": {
    "command": "npx",
    "args": ["@sylphx/pdf-reader-mcp"],
    "cwd": "/path/to/docs"
  }
}
```

</td>
</tr>
<tr>
<td width="50%">

### ❌ "No tools" showing up

**Solution:** Clear cache and reinstall

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install @sylphx/pdf-reader-mcp@latest
```

Restart MCP client completely.

</td>
<td width="50%">

### ⚠️ Large response size

**Solutions:**
- Use `pages` parameter
- Set `include_images: false`
- Extract text and images separately
- Use pagination

</td>
</tr>
</table>

---

## ⚡ Performance

<div align="center">

### Real-World Benchmarks

| Operation | Ops/sec | Speed |
|:----------|:--------|:------|
| Error handling (non-existent file) | ~12,933 | ⚡⚡⚡⚡⚡ |
| Extract full text | ~5,575 | ⚡⚡⚡⚡ |
| Extract specific page | ~5,329 | ⚡⚡⚡⚡ |
| Extract multiple pages | ~5,242 | ⚡⚡⚡⚡ |
| Metadata + page count | ~4,912 | ⚡⚡⚡ |

### Parallel Processing Benefits

| Document Size | Speedup vs Sequential |
|:--------------|:---------------------|
| 10-page PDF | **5-8x faster** |
| 50-page PDF | **10x faster** |
| 100+ page PDF | **Linear scalability** with CPU cores |

*Performance varies based on PDF complexity and system resources*

</div>

---

## 🏗️ Architecture

<div align="center">

### Tech Stack

| Component | Technology | Why |
|:----------|:-----------|:----|
| **Runtime** | Node.js 22+ ESM | Modern, fast, native ESM |
| **PDF Engine** | PDF.js (Mozilla) | Battle-tested, reliable |
| **Validation** | Zod + JSON Schema | Type-safe, auto-generated |
| **Protocol** | MCP SDK | Official implementation |
| **Language** | TypeScript (strict) | Type safety, no compromises |
| **Testing** | Vitest | 103 tests, 94%+ coverage |
| **Code Quality** | Biome | 50x faster than ESLint |
| **CI/CD** | GitHub Actions | Automated testing & publishing |

</div>

### Design Principles

<table>
<tr>
<td width="25%" align="center">
<strong>🔒 Security First</strong><br/>
<sub>Flexible paths with secure defaults</sub>
</td>
<td width="25%" align="center">
<strong>🎯 Simple Interface</strong><br/>
<sub>One tool, all operations</sub>
</td>
<td width="25%" align="center">
<strong>⚡ Performance</strong><br/>
<sub>Parallel processing, efficient memory</sub>
</td>
<td width="25%" align="center">
<strong>🧪 Quality</strong><br/>
<sub>94%+ coverage, zero compromises</sub>
</td>
</tr>
</table>

---

## 🧪 Development

<details>
<summary><strong>🛠️ Setup & Scripts</strong></summary>

### Prerequisites
- Node.js >= 22.0.0
- pnpm (recommended) or npm

### Setup
```bash
git clone https://github.com/sylphxltd/pdf-reader-mcp.git
cd pdf-reader-mcp
pnpm install && pnpm build
```

### Available Scripts
```bash
pnpm run build          # Build TypeScript → dist/
pnpm run watch          # Build in watch mode
pnpm run test           # Run 103 tests
pnpm run test:watch     # Tests in watch mode
pnpm run test:cov       # Coverage report (94%+)
pnpm run check          # Lint + format (Biome)
pnpm run check:fix      # Auto-fix issues
pnpm run typecheck      # TypeScript validation
pnpm run benchmark      # Performance tests
pnpm run validate       # Full validation
```

### Quality Standards
- ✅ **103 tests** covering all functionality
- ✅ **94%+ code coverage** (lines, statements)
- ✅ **98%+ function coverage**
- ✅ **Zero lint errors** enforced by CI
- ✅ **Strict TypeScript** mode enabled

</details>

<details>
<summary><strong>🤝 Contributing</strong></summary>

We welcome contributions! 🎉

### Quick Start
1. Fork the repository
2. Create feature branch: `git checkout -b feature/awesome`
3. Make changes and test: `pnpm test`
4. Format code: `pnpm run check:fix`
5. Commit with [Conventional Commits](https://www.conventionalcommits.org/)
6. Open Pull Request

### Commit Format
```
type(scope): description

Examples:
feat(images): add WebP format support
fix(paths): handle Windows UNC paths
docs(readme): update installation guide
```

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

</details>

---

## 📚 Documentation

<table>
<tr>
<td align="center" width="33%">

📖 **[Full Docs](https://sylphxltd.github.io/pdf-reader-mcp/)**
Complete guides & API reference

</td>
<td align="center" width="33%">

🚀 **[Getting Started](./docs/guide/getting-started.md)**
Quick start guide

</td>
<td align="center" width="33%">

📘 **[API Reference](./docs/api/README.md)**
Detailed API docs

</td>
</tr>
<tr>
<td align="center" width="33%">

🏗️ **[Design Philosophy](./docs/design/index.md)**
Architecture decisions

</td>
<td align="center" width="33%">

⚡ **[Performance](./docs/performance/index.md)**
Benchmarks & optimization

</td>
<td align="center" width="33%">

🔍 **[Comparison](./docs/comparison/index.md)**
vs. alternatives

</td>
</tr>
</table>

---

## 🗺️ Roadmap

<table>
<tr>
<td width="50%">

### ✅ Completed

- [x] Image extraction (v1.1.0)
- [x] Parallel processing 5-10x speedup (v1.1.0)
- [x] Y-coordinate content ordering (v1.2.0)
- [x] Absolute path support (v1.3.0)

</td>
<td width="50%">

### 🚀 Coming Soon

- [ ] OCR for scanned PDFs (Tesseract.js)
- [ ] PDF annotation extraction
- [ ] Form field data extraction
- [ ] Table structure detection
- [ ] Streaming for 100+ MB files
- [ ] Advanced caching (LRU)
- [ ] PDF generation/manipulation

</td>
</tr>
</table>

---

## 🤝 Support & Community

<div align="center">

### Get Help

[![GitHub Issues](https://img.shields.io/github/issues/sylphxltd/pdf-reader-mcp?style=for-the-badge)](https://github.com/sylphxltd/pdf-reader-mcp/issues)
[![GitHub Discussions](https://img.shields.io/github/discussions/sylphxltd/pdf-reader-mcp?style=for-the-badge)](https://github.com/sylphxltd/pdf-reader-mcp/discussions)

</div>

### Show Your Support

<table>
<tr>
<td align="center">⭐<br/><strong>Star</strong><br/>the repo</td>
<td align="center">👀<br/><strong>Watch</strong><br/>for updates</td>
<td align="center">🐛<br/><strong>Report</strong><br/>bugs</td>
<td align="center">💡<br/><strong>Suggest</strong><br/>features</td>
<td align="center">🔀<br/><strong>Contribute</strong><br/>code</td>
<td align="center">📢<br/><strong>Share</strong><br/>with others</td>
</tr>
</table>

---

## 📊 Project Stats

<div align="center">

![GitHub Stars](https://img.shields.io/github/stars/sylphxltd/pdf-reader-mcp?style=social)
![GitHub Forks](https://img.shields.io/github/forks/sylphxltd/pdf-reader-mcp?style=social)
![npm Downloads](https://img.shields.io/npm/dm/@sylphx/pdf-reader-mcp)
![GitHub Contributors](https://img.shields.io/github/contributors/sylphxltd/pdf-reader-mcp)

**103 Tests** • **94%+ Coverage** • **Active Development** • **Production Ready**

</div>

---

## 🏆 Recognition

<div align="center">

Featured on [Smithery](https://smithery.ai/server/@sylphx/pdf-reader-mcp) • Listed on [Glama](https://glama.ai/mcp/servers/@sylphx/pdf-reader-mcp) • Security validated by [MseeP.ai](https://mseep.ai/app/sylphxltd-pdf-reader-mcp)

**Trusted by developers worldwide** • **Enterprise adoption** • **Battle-tested**

</div>

---

## 📄 License

<div align="center">

MIT License - Free for personal and commercial use

[View License](./LICENSE)

</div>

---

<div align="center">

<img src="https://img.shields.io/badge/Made_with-❤️-red?style=for-the-badge" alt="Made with love"/>

**Built by [Sylphx](https://sylphx.com)**
*Building the future of AI-powered document processing*

---

[⬆ Back to Top](#-pdf-reader-mcp-server)

</div>

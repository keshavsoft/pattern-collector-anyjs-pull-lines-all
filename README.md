# pattern-collector-anyjs-pull-lines-all 🔍

> **A simple, zero-dependency ES module to split file content into lines and track their 1-indexed line numbers.**

[![npm version](https://img.shields.io/npm/v/pattern-collector-anyjs-pull-lines-all.svg?style=flat-square&color=38bdf8)](https://www.npmjs.com/package/pattern-collector-anyjs-pull-lines-all)
[![license](https://img.shields.io/npm/l/pattern-collector-anyjs-pull-lines-all.svg?style=flat-square&color=34d399)](LICENSE)

🔗 **Quick Links:**
*   📦 **NPM Registry**: [npmjs.com/package/pattern-collector-anyjs-pull-lines-all](https://www.npmjs.com/package/pattern-collector-anyjs-pull-lines-all)
*   💻 **GitHub Repo**: [github.com/keshavsoft/pattern-collector-anyjs-pull-lines-all](https://github.com/keshavsoft/pattern-collector-anyjs-pull-lines-all)
*   🌐 **Live Documentation**: [keshavsoft.github.io/pattern-collector-anyjs-pull-lines-all](https://keshavsoft.github.io/pattern-collector-anyjs-pull-lines-all/)

---

## 📖 Overview

`pattern-collector-anyjs-pull-lines-all` is a zero-dependency ES module used as a sub-module of `pattern-collector-anyjs-pull-lines`. It splits the provided JavaScript or text source code by lines and attaches 1-indexed line numbers to each line (generating the "story").

This is useful for general line indexing, auditing, or context matching.

---

## ✨ Features

- **⚡ Zero Dependencies**: Light, fast, and secure.
- **🏷️ Line Tracking**: Returns an array of lines paired with their actual 1-indexed line numbers.
- **📦 ESM Native**: Built for modern ES module environments.

---

## 🔗 Dependency Chain

*   [`pattern-collector-anyjs-extract`](https://www.npmjs.com/package/pattern-collector-anyjs-extract) - listed in [`package.json`](package.json) as `^1.4.6`.

---

## 🚀 Installation

```bash
npm install pattern-collector-anyjs-pull-lines-all
```

---

## 💻 Usage Example

Here is a quick example showing how to extract all lines and their stories:

```javascript
import pullLinesAll from 'pattern-collector-anyjs-pull-lines-all';

const code = `import express from 'express';
const router = express.Router();`;

const result = pullLinesAll({ fileContent: code });

console.log(result);
/*
Output:
{
  allLines: [
    "import express from 'express';",
    "const router = express.Router();"
  ],
  allLinesStory: [
    { line: "import express from 'express';", lineNumber: 1 },
    { line: "const router = express.Router();", lineNumber: 2 }
  ]
}
*/
```

---

## 🛠️ API Reference

### `default(options)`

The default export is a function that processes the provided content.

#### Parameters

An options object containing:

* **`fileContent`** `(string)`: The raw text content to analyze.
* **`showLog`** `(boolean)` *(optional)*: When set to `true`, prints debugging logs to the console.

#### Returns

* **`Object`**:
  - `allLines` `(Array<string>)`: An array containing all lines as strings.
  - `allLinesStory` `(Array<Object>)`: An array of line story objects.

Each line story object has the following shape:
```typescript
{
  line: string;        // The content of the line
  lineNumber: number;  // 1-indexed line number in the source file
}
```

---

## ⚖️ License

MIT License. Designed with ❤️ by [KeshavSoft](https://github.com/keshavsoft).


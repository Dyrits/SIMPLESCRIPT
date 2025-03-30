# SimpleScript

SimpleScript is a  simple programming language parser and interpreter. (Currently, only the lexer and parser components have been implemented.)

## Table of contents
- [Technologies](#technologies-and-tools)
- [Installation](#installation)
- [Status](#status)
  - [Features](#features)
  - [To-do](#to-do)
- [Contributing](#contributing)
- [Licence](#licence)

## Technologies and tools
- TypeScript
- Bun (JavaScript runtime)

## Installation
1. Clone the repository
2. Install dependencies (if any)
3. Run the project using Bun:

```bash
bun start
```

To watch for changes during development:
```bash
bun watch
```

## Status
Current version: 1.0.0

The project is in early development. Only the lexer and parser components have been implemented so far.

### Features
- Lexer: Tokenizes the input code
- Parser: Generates an Abstract Syntax Tree (AST) from tokens

### To-do
- Implement the interpreter
- Add support for variables
- Add support for control flow statements
- Add support for functions

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate (if any).

## Licence
[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)
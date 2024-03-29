# TSLib Stack

> A stack for modern TypeScript libraries

## Introduction

A stack with everything you need when writing modern, maintainable TypeScript libraries and tools.

**[Example Docs](https://felixrilling.github.io/tslib-stack/)**

## Tools

- Typescript
- Jest
- ESLint
- TypeDoc

## Structure

- `src/` Contains the main library code.
	- `main.ts` Library entry point.
- `__tests__/` Jest tests.
- `dist/` Compiled output.
- `docs/` Documentation generated from docs script.

## Scripts

- `dist` Compiles the library, runs tests and builds docs.
- `build` Compiles the library.
- `test` Compiles and runs tests
- `docs` Generates TypeDoc documentation
- `lint` Lints all source scripts and tests
- `fix` Auto-fixes issues in source scripts and tests

## Compatibility

Designed to be used on Linux and similar systems.

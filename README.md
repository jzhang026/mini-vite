# mini-vite

## Usage

```bash
# Install dependencies
$ yarn

# Start local dev
$ yarn start
```

## How Vite works?

### Dev support

1. create dev server to serve code file and deps
2. mount http middleware for route registration
3. module graph initialization
4. initialize Plugin container (for different assets support)
5. perform deps optimizer (this is to pre bundle the 3rd party deps so you have a fast dev experiences)
6. wait for browser `import` requests.

Step 5 is the secret weapon why Vite is fast. `Optimizer` will found the code entry point and perform `importing` scan. Then `esbuild` and `esbuldScanPlugin` will perform pre-compiling for 3rd party deps.

### Project of Vite

- pnpm as the package manager
- [tsx](https://www.npmjs.com/package/tsx) for the running of ts code.
- Compilation: `rollup` for Vite main business code. `unbuild` for Vite plugin code.
- [api-extractor](https://api-extractor.com/) for Typescript declaration file bundling.
- bundled code is `ESM`, but CJS-proxy is provided for commonjs scenario.

# Goblin Store

## _This project was created to practice writing ReactJS using Typescript_

### _The code is written based on practicing the exercises in the Fullstack React with TypeScript book from https://www.newline.co/fullstack-react-with-typescript._

## Notes

- I changed `"start:server": "ts-node --compiler-options {\"module\":\"commonjs\"} ./server/index.ts"` to `"start:server": "ts-node --compiler-options {\\\"module\\\":\\\"commonjs\\\"} ./server/index.ts"` so that the script can be compatible with PowerShell on Windows 10.
- Please install NodeJS version `10.20.1` to avoid running errors.
- If you want to use a NodeJS version other than version 10 (10 ≤ NodeJS version ≤ 14), see instructions in section 2 below.

## Installation & Running

1. Install the dependencies and devDependencies:

```sh
yarn install
```

2. Install the dependencies and devDependencies (for NodeJS versions higher than 10):

```sh
yarn install --ignore-engines
```

3. Run the app:

```sh
yarn dev
```

4. Run the test:

```sh
yarn test
```

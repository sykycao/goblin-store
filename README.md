# Goblin Store

## _This project was created to practice writing ReactJS using Typescript_

### _The code is written based on practicing the exercises in the Fullstack React with TypeScript book from https://www.newline.co/fullstack-react-with-typescript._

## Notes

- I changed `"start:server": "ts-node --compiler-options {\"module\":\"commonjs\"} ./server/index.ts"` to `"start:server": "ts-node --compiler-options {\\\"module\\\":\\\"commonjs\\\"} ./server/index.ts"` so that the script can be compatible with PowerShell on Windows 10.
- Please install NodeJS version `10.20.1` to avoid running errors.

## Installation & Running

Install the dependencies and devDependencies:

```sh
yarn install
```

Run the app:

```sh
yarn dev
```

Run the test:

```sh
yarn test
```

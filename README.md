# Aiolos

This is project is related with express + ethereum, the main idea is to create an endpoint to interact with the smart contract named [SimpleContract](./contracts/SimpleContract.sol) deployed in the ethereum network.

## Technologies

- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Web3](https://web3js.readthedocs.io/en/v1.2.11/)
- [Truffle](https://www.trufflesuite.com/truffle) (for smart contract development and deployment) You can use [Remix](https://remix.ethereum.org/) as well.
- [Ganache](https://www.trufflesuite.com/ganache) (for local development)

## Install

```
npm install
```

## Run

```
npm run dev
```

### Local development

1. Install [Ganache](https://www.trufflesuite.com/ganache)

   ```
   npm install -g ganache
   ```

2. Run Ganache

   This will run a local blockchain in your machine. You can see the accounts and private keys in the console and the local blockchain will be running in the port 8545.

   ```bash
   ganache-cli
   ```

Also you can use hardhat to run a local blockchain, you can find more information [here](https://hardhat.org/guides/mainnet-forking.html). Currently Ganache and Truffle are deprecated. Hardhat is the new tool for smart contract development.

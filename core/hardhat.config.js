require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
const pkey = process.env.PKEY;
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 module.exports = {
  defaultNetwork: "bsctest",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    hardhat: {},
    bsctest: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 150000000000,
      accounts: [`0x${pkey}`],
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 5000000000,
      accounts: [`0x${pkey}`],
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000
          },
        },
      },
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000
          },
        },
      },      {
        version: "0.7.3",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000
          },
        },
      },
    ],
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://bscscan.com/
    apiKey: "188FQ2B4JM9I9P7VYG9P2A9BAUHD6NFGQQ",
  },

  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
  },
};

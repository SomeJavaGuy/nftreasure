const fs = require('fs');
var HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = fs.readFileSync(".secret").toString().trim();
const token = fs.readFileSync(".infura").toString().trim();

require('babel-register');
require('babel-polyfill');

module.exports = {
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "0.7.0",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
      development: {
          host: "127.0.0.1",
          port: 7545,
          network_id: "*" // Match any network id
      },
      rinkeby: {
          provider: function() {
              return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/" + token);
          },
          network_id: 4,
          gas: 4500000,
          gasPrice: 10000000000,
      }
  }
};

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/taDWYk0gc6Q1W_S08tSwN91hov3G7nV4',
      accounts: ['2e993f84b6e16dc6158027557731f979f5c3e7c422962ada03c9af8d93b2b7a5'],
    },
  },
};
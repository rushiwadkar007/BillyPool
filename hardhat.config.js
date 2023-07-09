require("@nomicfoundation/hardhat-toolbox")
const INFURA_API_KEY = "hZi9jIS1O0c1mg4PlnYDp_LFcFRNig-f";//06e0c8b8ec54440ab91bfa56cbd5e1e7
const FIRST_API_KEY = "3c69615fd4dbae5e068a8c7899ae9992087d3d2436b9023ab166a7e1fed298de"
const SECOND_API_KEY = "4cf87cabb9f9f6878784288836a6cef20ace322cb6fb6c4c3146cfa14ccf1681"
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 5000,
        details: { yul: false },
      },
    }
  },
  networks: {
    ethereum: {
      url: `https://eth-mainnet.g.alchemy.com/v2/VVv6DW7081eqnsyVKL6BhOOI7kA4q1LU`,//`https://eth-goerli.g.alchemy.com/v2/TX-HJFlEX7pefBy1JSFc7iS1_ASqUmlz`,//`https://goerli.infura.io/v3/06e0c8b8ec54440ab91bfa56cbd5e1e7`,
      accounts: [FIRST_API_KEY, SECOND_API_KEY],
      chainId: 1,
      gasPrice: 20000000000,
      gas: 3000000,
    }
  }
};

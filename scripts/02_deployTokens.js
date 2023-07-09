const fs = require('fs');
const { promisify } = require('util');
async function main() {
  const [owner, signer2] = await ethers.getSigners();
console.log(owner, signer2);
  BillyHerrington = await ethers.getContractFactory('BillyHerrington', owner);
  billyHerrington = await BillyHerrington.deploy("BillyHerrington", "BILLY");

  Usdc = await ethers.getContractFactory('UsdCoin', owner);
  usdc = await Usdc.deploy();

  WrappedBitcoin = await ethers.getContractFactory('WrappedBitcoin', owner);
  wrappedBitcoin = await WrappedBitcoin.deploy();

  // await billyHerrington.connect(owner).mint(
  //   signer2.address,
  //   ethers.utils.parseEther('100000')
  // )
  await usdc.connect(owner).mint(
    signer2.address,
    ethers.utils.parseEther('100000')
  )
  await wrappedBitcoin.connect(owner).mint(
    signer2.address,
    ethers.utils.parseEther('100000')
  )

  let addresses = [
    `USDT_ADDRESS=${usdc.address}`,
    `BillyHerrington_ADDRESS=${billyHerrington.address}`,
    `WRAPPED_BITCOIN_ADDRESS=${wrappedBitcoin.address}`,
  ]
  const data = '\n' + addresses.join('\n')

  const writeFile = promisify(fs.appendFile);
  const filePath = '.env';
  return writeFile(filePath, data)
      .then(() => {
        console.log('Addresses recorded.');
      })
      .catch((error) => {
        console.error('Error logging addresses:', error);
        throw error;
      });
}

/*
  npx hardhat run --network localhost scripts/02_deployTokens.js
*/

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
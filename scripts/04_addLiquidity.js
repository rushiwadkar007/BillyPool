require('dotenv').config()

BILLYHERRINGTON_ADDRESS = process.env.BillyHerrington_ADDRESS
USDT_ADDRESS = process.env.USDT_ADDRESS
WRAPPED_BITCOIN_ADDRESS = process.env.WRAPPED_BITCOIN_ADDRESS
WETH_ADDRESS = process.env.WETH_ADDRESS
FACTORY_ADDRESS = process.env.FACTORY_ADDRESS
SWAP_ROUTER_ADDRESS = process.env.SWAP_ROUTER_ADDRESS
NFT_DESCRIPTOR_ADDRESS = process.env.NFT_DESCRIPTOR_ADDRESS
POSITION_DESCRIPTOR_ADDRESS = process.env.POSITION_DESCRIPTOR_ADDRESS
POSITION_MANAGER_ADDRESS = process.env.POSITION_MANAGER_ADDRESS
BILLY_USDT_500 = process.env.BILLY_USDT_500

const artifacts = {
  NonfungiblePositionManager: require("@uniswap/v3-periphery/artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json"),
  Billy: require("../artifacts/contracts/BillyHerrington.sol/BillyHerrington.json"),
  Usdc: require("../artifacts/contracts/UsdCoin.sol/UsdCoin.json"),
  UniswapV3Pool: require("@uniswap/v3-core/artifacts/contracts/UniswapV3Pool.sol/UniswapV3Pool.json"),
};

const { Contract } = require("ethers")
const { Token } = require('@uniswap/sdk-core')
const { Pool, Position, nearestUsableTick } = require('@uniswap/v3-sdk')

async function getPoolData(poolContract) {
  const [tickSpacing, fee, liquidity, slot0] = await Promise.all([
    poolContract.tickSpacing(),
    poolContract.fee(),
    poolContract.liquidity(),
    poolContract.slot0(),
  ])

  return {
    tickSpacing: tickSpacing,
    fee: fee,
    liquidity: liquidity,
    sqrtPriceX96: slot0[0],
    tick: slot0[1],
  }
}

async function main() {
  const [owner, signer2] = await ethers.getSigners();

  // console.log("signer2",signer2);

  const provider = ethers.provider
  // console.log("provider", provider);
  const billyContract = new Contract(BILLYHERRINGTON_ADDRESS, artifacts.Usdt.abi, provider)
  // console.log("billyContract", billyContract);
  const usdcContract = new Contract(USDT_ADDRESS, artifacts.Usdc.abi, provider);
  // console.log("usdcContract", usdcContract);
  await billyContract.connect(signer2).approve(POSITION_MANAGER_ADDRESS, ethers.utils.parseEther('800000000000000000000000000'))
  await usdcContract.connect(signer2).approve(POSITION_MANAGER_ADDRESS, ethers.utils.parseEther('800000000000000000000000000'))
  await billyContract.connect(signer2).approve(SWAP_ROUTER_ADDRESS, ethers.utils.parseEther('800000000000000000000000000'))
  await usdcContract.connect(signer2).approve(SWAP_ROUTER_ADDRESS, ethers.utils.parseEther('800000000000000000000000000'))
  const poolContract = new Contract(BILLY_USDT_500, artifacts.UniswapV3Pool.abi, provider)
  console.log("poolContract", poolContract);
  const poolData = await getPoolData(poolContract);
  // console.log("pooldata", poolData);
  const BillyToken = new Token(1, BILLYHERRINGTON_ADDRESS, 18, 'BILLY', 'BillyHerrington')
  // console.log("BillyToken", BillyToken);
  const USDTToken = new Token(1, USDT_ADDRESS, 18, 'USDT', 'Tether USD')
  // console.log("USDTToken", USDTToken);
  const pool = new Pool(
    BillyToken,
    USDTToken,
    poolData.fee,
    poolData.sqrtPriceX96.toString(),
    poolData.liquidity.toString(),
    poolData.tick
  )

  const position = new Position({
    pool: pool,
    liquidity: ethers.utils.parseEther('1'),
    tickLower: nearestUsableTick(poolData.tick, poolData.tickSpacing) - poolData.tickSpacing * 2,
    tickUpper: nearestUsableTick(poolData.tick, poolData.tickSpacing) + poolData.tickSpacing * 2,
  })

  const { amount0: amount0Desired, amount1: amount1Desired } = position.mintAmounts

  params = {
    token0: BILLYHERRINGTON_ADDRESS,
    token1: USDT_ADDRESS,
    fee: poolData.fee,
    tickLower: nearestUsableTick(poolData.tick, poolData.tickSpacing) - poolData.tickSpacing * 2,
    tickUpper: nearestUsableTick(poolData.tick, poolData.tickSpacing) + poolData.tickSpacing * 2,
    amount0Desired: amount0Desired.toString(),
    amount1Desired: amount1Desired.toString(),
    amount0Min: 1,
    amount1Min: 1,
    recipient: signer2.address,
    deadline: Math.floor(Date.now() / 1000) + (60 * 10)
  }

  const nonfungiblePositionManager = new Contract(
    POSITION_MANAGER_ADDRESS,
    artifacts.NonfungiblePositionManager.abi,
    provider
  )

  const tx = await nonfungiblePositionManager.connect(signer2).mint(
    params,
    { gasLimit: '1000000' }
  )
  // console.log("tx", tx);
  await tx.wait()
}

/*
  npx hardhat run --network localhost scripts/04_addLiquidity.js
*/

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('EX ERROR=========>>>>',error);
    process.exit(1);
  });
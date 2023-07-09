import { ethers } from "ethers";
// import { useProvider } from "wagmi";
import { eth, constants } from "../../config";

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner()
 

const factoryAddress = eth.factoryAddress;
const factoryAbi = constants.factoryAbi;

const routerAddress = eth.uniswapRouterAddress;
const routerAbi = constants.routerAbi;

// const zeroAddr = eth.zeroAddress;

const factory = new ethers.Contract(factoryAddress, factoryAbi, signer)
const router = new ethers.Contract(routerAddress, routerAbi, signer)

const slippageAmt = (amt, percent) => {
    const amount = amt - (amt * percent/100)
    return amount
}

export const createPair = async(tokenA, tokenB) =>{
    const createPair  = await factory.createPair(tokenA, tokenB);
    return createPair
}

// check if tokens have existing pair
export const getPair = async (tokenA, tokenB) => {
    const pair = await factory.getPair(tokenA, tokenB)
    return pair
}

// create pair for both tokens
export const addLiquidityToken = async (tokenA, tokenB, amtA, amtB, slipPercent, deadline) => {
    console.log("tokenA, tokenB, amtA, amtB, slipPercent, deadline", tokenA, tokenB, amtA, amtB, slipPercent, deadline);
    const address = await signer.getAddress()
    let amt1 = slippageAmt(amtA, slipPercent)
    let amt2 = slippageAmt(amtB, slipPercent)

    amtA = '0x' + amtA.toString(16)
    amtB = '0x' + amtB.toString(16)

    amt1 = '0x' + amt1.toString(16)
    amt2 = '0x' + amt2.toString(16)
    deadline = '0x' + deadline.toString(16)   
    const tx = await router.addLiquidity(tokenA, tokenB,
         amtA, amtB, amt1, amt2, address, deadline, {gasLimit: 21000})   
    return tx;
}

// create pair for one token and bnb
export const addLiquidityEth = async (tokenA, amtA, ethAmt, slipPercent, deadline) => {
    console.log("addLiquidityEth execution is started", tokenA, amtA, ethAmt, slipPercent, deadline)
    const address = await signer.getAddress()
    const amt1 = slippageAmt(amtA, slipPercent)
    // const amt2 = ethers.BigNumber.from(amt1.toString())
    const amt2 = parseFloat(amt1)
    const ethAmt1 = slippageAmt(ethAmt, slipPercent)
    const ethAmt2 = ethers.BigNumber.from(ethAmt1.toString())
    const tx = await router.addLiquidityETH(tokenA, amt1, ethAmt1, address, deadline, {value: ethers.utils.parseEther(ethAmt2.toString()), gasLimit: 21000})
    console.log("Transaction:::", tx)
    return tx
}
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {

  const Auction = await hre.ethers.getContractFactory("Auction")
  const auction = await Auction.deploy()
  await auction.deployed()
  
  const Basket = await hre.ethers.getContractFactory("Basket")
  const basket = await Basket.deploy()
  await basket.deployed()

  const Factory =  await hre.ethers.getContractFactory("Factory")
  const factory = await Factory.deploy(auction.address, basket.address)
  await factory.deployed()
  console.log(`Auction: ${auction.address}`)
  console.log(`Basket: ${basket.address}`)
  console.log(`Factory: ${factory.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

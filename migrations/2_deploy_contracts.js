var NFTreasure = artifacts.require("./NFTreasure.sol");

module.exports = function(deployer) {
  deployer.deploy(NFTreasure);
};

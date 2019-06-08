let contract = artifacts.require("TestConsumer");
let contract_address = '0x54c845cdb69466e57b096b174ff01c957b02de50';
let oracle_address = '0x84a27fa96e01c93c448bb66752e7327745175722';
let job_id = '92c81e39b45e4700b094eea18f51e793';

module.exports = function() {

  async function getEhereumPrice() {
    console.log('Retrieving deployed contract binary...');
    let ins = await contract.at(contract_address);
    console.log('Calling requestEthereumPrice');
    let res = await ins.requestEthereumPrice(oracle_address, job_id);
    console.log('Request made..\n\n');
    console.log(JSON.stringify(res));
    console.log('');
  }
  getEhereumPrice();
};


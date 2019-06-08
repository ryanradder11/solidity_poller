let contract = artifacts.require("TestConsumer");
let contract_address = '0x54c845cdb69466e57b096b174ff01c957b02de50';
let oracle_address = '0x7a5b6329cb2f68ede093faf8c743508fa01d3535';
let job_id = '7a97dc29650a4c1cb4e4624367ef3a6d';

module.exports = function() {

  async function getEhereumPrice() {
    console.log('Retrieving deployed contract binary...');
    let ins = await contract.at(contract_address);
    console.log('Calling requestEthereumPrice');
    let res = await ins.requestEthereumPrice(oracle_address, job_id);
    console.log(JSON.stringify(res));
  }
  getEhereumPrice();
};


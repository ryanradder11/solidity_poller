let consumerContract = artifacts.require("TestConsumer");
let oracleContract = artifacts.require("TestOracle");
let contract_address = '0x54c845cdb69466e57b096b174ff01c957b02de50';
let oracle_address = '0x84a27fa96e01c93c448bb66752e7327745175722';
let job_id = '92c81e39b45e4700b094eea18f51e793';

let consummerInstance = null;
let oracleInstance = null;

module.exports = function() {

  async function getEhereumPrice() {
    if(consummerInstance === null){
      console.log('Retrieving deployed contract binary...');
       consummerInstance = await consumerContract.at(contract_address);
    }
    console.log('Calling requestEthereumPrice');
    let res = await consummerInstance.requestEthereumPrice(oracle_address, job_id);
    console.log('Request made..\n\n');
    console.log(JSON.stringify(res) + '\n\n');

    // if(oracleInstance === null){
    //   console.log('Retrieving oracle instance');
    //   oracleInstance = await oracleContract.at(oracle_address);
    // }

  }
  setInterval(() =>{
    getEhereumPrice();
  }, 1000 * 60 * 3);
};


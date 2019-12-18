const Web3 = require('web3');
const TRUFFLE = require('./src/config/MyERC20.json');

let provider;
let contract;

// provider
if (provider!==undefined) {
  provider = new Web3(provider.currentProvider);
} else {
  provider = new Web3(
    new Web3.providers.WebsocketProvider('ws://127.0.0.1:9545')
  )
}

// contract
contract = new provider.eth.Contract(
  TRUFFLE.abi,
  '0x7db13DAD61789890b5Bbb03B35a1a4c2F84c5dc9',
);

// call contract
contract.methods.totalSupply().call()
  .then(d => console.log(d));

contract.methods.balanceOf('0x579544fc9c07131ef318e25fe2d706e08836266e')
  .call().then(d => console.log(d));

// contract.methods.login()
//   .send({from: '0x579544fc9c07131ef318e25fe2d706e08836266e'})
//   .then(d => console.log(d));

// contract.methods.balanceOf('0x579544fc9c07131ef318e25fe2d706e08836266e')
//   .call().then(d => console.log(d));

// contract.methods.mora(1, 10).send(
//   {from: '0x579544fc9c07131ef318e25fe2d706e08836266e'}
// ).then(d => console.log(d))
//   .catch(e => console.error(e));

// listen event
// let i = 0;
// contract.events.mora_log({
//   fromBlock: 0
// })
// .on('data', function(event){
//   console.log(`===== ${++i} ======`)
//   console.log(event.returnValues);
// })
// .on('error', console.error);

(async () => {
  contract.events.mora_log({fromBlock: 0})
    .on('data', (event) => {
      console.log(event.returnValues['3']);
      return event.returnValues['3']
    })
})();
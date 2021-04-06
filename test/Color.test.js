const Color = artifacts.require("./Color.sol");
//el artifact representa el json del contrato.
//const chai = require('chai-as-promised')

contract("Color", (accounts) => {
  let contract;

  before(async() => {
      contract = await Color.deployed()
  })

  describe("deployment", async () => {
    it("deploys succesfully", async () => {
      contract = await Color.deployed();
      const address = contract.address;
      console.log(address);
      assert.notEqual(address, "");
      assert.notEqual(address, 0x0);
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);

    });
    it("has a name", async() => {
        const name = await contract.name()
        assert.equal(name, "Color")
    });
    it('has a symbol', async() => {
        const symbol = await contract.symbol()
        assert.equal(symbol, "COLOR")
    })
  });
  describe('minting', async() => {
      it('create a new token', async() => {
        const result = await  contract.mint('#EC058E')
        
        //SUCCESS
       console.log(result)
       const event = result.logs[0].args
       assert.equal(event.tokenId.toNumber(), 0, 'id is correct')
       assert.equal(event.from, '0x0000000000000000000000000000000000000000', 'from is correct')
       assert.equal(event.to, accounts[0], 'to is correct')

       //FAILURE: cannot mint same color twice
       //await contract.mint('#EC058E').should.be.rejected

      })
  });

  /* REVISAR ESTE DESCRIBE PARA DEVOLVER LOS TOKENS CREADOS 
  describe('indexing', async() => {
    it('list colors', async()=> {
        //mint 3 tokens
        await  contract.mint('#FFFFFF')
        await  contract.mint('#000000')
        await  contract.mint('#5386E4')

        const balanceOfNFT = await contract.balanceOf('0x543d5414beb19c05a13bdaf6fde508e685560307')
let color
let result = []
for(let i = 0; i <= balanceOfNFT; i++) {
    color = await contract.colors(i - 1)
    result.push(color)
}     
let expected = ['#EC058E', '#5386E4', '#FFFFFF', '#000000']
assert.equal(result.join(','), expected.join(','))

    })
  }) */
});

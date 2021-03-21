const NFTreasure = artifacts.require("./NFTreasure.sol")

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('NFTreasure', (accounts) => {
    let contract

    before(async () => {
        contract = await NFTreasure.deployed()
    })

    describe('deployment', async () => {
        it('deploys successfully', async () => {
            const address = accounts[0]
            console.log(address)
            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)

            // Check that the contract has all the NFTs
            br_balance = await contract.balanceOf(address, 0);
            assert.equal(br_balance, 10);
            pemy_balance = await contract.balanceOf(address, 1);
            assert.equal(pemy_balance, 10);
            soteur_balance = await contract.balanceOf(address, 2);
            assert.equal(soteur_balance, 10);
            secret1_balance = await contract.balanceOf(address, 3);
            assert.equal(secret1_balance, 1);
            secret2_balance = await contract.balanceOf(address, 4);
            assert.equal(secret1_balance, 1);
        })
    })

    describe('metadata', async () => {
        it('url works', async() => {
            // Fetch URL for bassmentrats
            url = await contract.uri(0)
            assert.equal(url, "https://test/{id}.json");

            // Fetch URL for soteur
            url = await contract.uri(2)
            assert.equal(url, "https://test/{id}.json");

            // Fetch URL for secret2
            url = await contract.uri(4)
            assert.equal(url, "https://test/{id}.json");

            // Fetch URL for non-existent NFT. Check for rejection
            url = await contract.uri(5).should.be.rejected;
        })
    })

    describe('secret', async () => {
        it('submit secret', async() => {
            // Try submitting a secret without having access to the NFTs
            attempt = await contract.submitSecret(web3.utils.fromAscii("cake"), {from: accounts[1]}).should.be.rejected;

            br_balance = await contract.balanceOf(accounts[0], 0)
            assert.equal(br_balance, 10);

            // Transfer a BR NFT to this person
            await contract.safeTransferFrom(accounts[0], accounts[1], 0, 1, [], {from: accounts[0]})

            // Check that balances got updated
            hey = await contract.balanceOf(accounts[0], 0)
            assert.equal(hey, 9);
            hey = await contract.balanceOf(accounts[1], 0)
            assert.equal(hey, 1);

            // Transfer a PEMY NFT to this person
            await contract.safeTransferFrom(accounts[0], accounts[1], 1, 1, [], {from: accounts[0]})
            // Transfer a SOTEUR NFT to this person
            await contract.safeTransferFrom(accounts[0], accounts[1], 2, 1, [], {from: accounts[0]})

            // Check that accounts[1] also has PEMY and SOTEUR
            hey = await contract.balanceOf(accounts[1], 1)
            assert.equal(hey, 1);
            hey = await contract.balanceOf(accounts[1], 2)
            assert.equal(hey, 1);

            // Check that owner still has the secret
            hey = await contract.balanceOf(accounts[0], 3)
            assert.equal(hey, 1);
            hey = await contract.balanceOf(accounts[0], 4)
            assert.equal(hey, 1);

            // Check that URI is still the base URI
            uri = await contract.uri(3);
            assert.equal(uri, "https://test/{id}.json");


            attempt = await contract.submitSecret(web3.utils.fromAscii("cake"), {from: accounts[1]})
            hey = await contract.balanceOf(accounts[1], 3)
            assert.equal(hey, 1);

            attempt = await contract.submitSecret(web3.utils.fromAscii("pie"), {from: accounts[1]})
            hey = await contract.balanceOf(accounts[1], 4)
            assert.equal(hey, 1);

            // Blacklist triggered
            await contract.submitSecret(web3.utils.fromAscii("pie"), {from: accounts[1]}).should.be.rejected;

            // Check that URI is still the base URI
            uri = await contract.uri(3);
            assert.equal(uri, "https://cake/{id}.json");
        })
    })
})

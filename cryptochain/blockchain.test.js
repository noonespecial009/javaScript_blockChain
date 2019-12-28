const Blockchain = require('./blockchain');
const Block = require('./block');

describe('Blockchain', () => {
    let blockchain;

    beforeEach(() => {
        blockchain = new Blockchain();
    });

    it('contains a chain array instance', () => {
        expect(blockchain.chain instanceof Array).toBe(true);
    });

    it('starts with a genesis block', () => {
        expect(blockchain.chain[0]).toEqual(Block.genesis());
    });

    it('adds new block to chain', () => {
        const newData = 'foo bar';
        blockchain.addBlock({ data: newData });

        expect(blockchain.chain[blockchain.chain.length-1].data).toEqual(newData);
    });

    describe('isValidChain()', () => {
        describe('when the chain does not start with genesis block', () => {
            it('returns false', () => {
                blockchain.chain[0] = { data: 'fake-genesis' };
                
                expect(Blockchain.isValidChain(blockchain.chain)).toBe(false);
            });
        });

        describe('when the chain starts with the genesis block and has multiple blocks', () => {
            describe('and a lastHash reference has changed', () => {
                it('returns false', () => {
                    blockchain.addBlock({ data: 'Bears' });
                    blockchain.addBlock({ data: 'Beets' });
                    blockchain.addBlock({ data: 'Battlestar' });

                    blockchain.chain[2].lastHash = 'broken-lastHash';

                    expect(Blockchain.isValidChain(blockchain.chain)).toBe(false);
                });
            });

            describe('and the contains a block with an invalid field', () => {
                it('returns false', () => {});
            });

            describe('and the chain does not contain any invalid blocks', () => {
                it('returns true', () => {};)
            });
        });
    });

});
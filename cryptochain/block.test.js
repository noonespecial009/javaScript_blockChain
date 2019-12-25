const Block = require('./block');
const { GENESIS_DATA} = require('./config');
// jest library
describe('Block', () => {
    const timestamp = 'a-date';
    const lastHash = 'foo-hash';
    const hash = 'bar-hash';
    const data = ['blockchain', 'data'];
    const block = new Block({ timestamp, lastHash, hash, data});

    it('has a timestamp, last hash, hash and data property', () => {
        expect(block.timestamp).toEqual(timestamp);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
    });

    describe('genesis()', () => {
        const genesisBlock = Block.genesis();

        console.log('genesisBlock', genesisBlock);

        it('returns a block instance', () => {
            expect(genesisBlock instanceof Block).toEqual(true);
        });

        it('returns the gensis data', () => {
            expect(genesisBlock).toEqual(GENESIS_DATA);
        })
    });


});

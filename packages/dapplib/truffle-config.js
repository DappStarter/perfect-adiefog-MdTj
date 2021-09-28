require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth machine minor grace cricket supply genre'; 
let testAccounts = [
"0x764790c634be61893d938a8ced1622f49cefd26b46ad4d1f629c5f0095db3bbf",
"0x7afdec26c4d87e58b707f70ed38acb56c6b0b6c4326e9a165711f6cbd06c53bf",
"0x172225ac1fe6d279ad8674d10dc4ab340692a0e323653883bf0669b89502cbd9",
"0xe34dbc29ad28fcf45626e83511c0c23f842e1be05d73fbbb7c32a66f784110a4",
"0xf875fd01be0bd821fd4b077bff3137509427c4723706d95dc7123393142adfee",
"0x9463b132c3e3437a48e971a7681ca0a3f63939adef0b29c5b95be2e2d8334b36",
"0x05dfe81ce9fd9d22b906507fa03d565171941a792234aeff147e75e4a5773cbf",
"0xa9c7900c57ac6977092db3604b4f58443012b859e91ed07abdf857a9dd319d65",
"0x08e39e7d9af06a6181abfbab97d81e21aad5d5786f934352725b935c064fe073",
"0x892a6141df8682045f7407a8a5f179c61b9f05991c5d8bbe69173f94d5550dd2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


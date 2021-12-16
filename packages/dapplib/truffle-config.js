require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remember social install cricket bottom source'; 
let testAccounts = [
"0x3514e9145eb63f0886131328f19c6d68388d179d8b35a189b14c56f7f0f25a44",
"0x9a1e80474b1a11ad286193119bee56b008b9a4408e2a2ce02e271927df745c00",
"0xa853ed5179382374b6a5a415d8a6b5c6faff23d26064a13a08e510f7b0255a73",
"0xdb27347e794799f9b9b7dc52d7d543e39b7cd33593610af405b37de828a67b43",
"0x7a5ccebf03e8c01f6eb3a0a4eb55d0471c7c8008f5af6c5f756db98b9018fb92",
"0xad6fed92781f4d13de4d4bb8a30b755f991303b9636a0c736174889c7add3d60",
"0xe6ac4fa6bb8e413884f30d8608a62ae58141c717753e6dd8cf2ea0997ab494de",
"0xe2f9de65adf8466c18fe2ed7036e32d48dbddeb098682332b4bc783c889d14ca",
"0x82307f983a54eb5086db802fa6ff899fb963c536439768b709389076d270232f",
"0x5f90103287648fca253a2838daa8cebd057792df5c09d1c970e9402880fd767f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



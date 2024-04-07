import Web3 from "web3";


const web3 = new Web3("http://localhost:7545");


// list avail accounts
// web3.eth.getAccounts().then(console.log)

const cardHolders = {
    123456789012: { 
        username: '0x1b328E546895b0EdF9e399666d3119077D345F30', 
        password: '0x52a8d3680eb056595bf75a58fa0306162fa90a68b6a02e3af41dde1383fa2de2' 
    },
    234567890123: { 
        username: '0x3CcFb8Ac8dc860d951A2C631718e3c1851262C98', 
        password: '0x49e487dfcf88d3e00736ff369d2cca4e159f383effaaeee187ecf1df5d3ee39e' 
    },
    345678901234: { 
        username: '0x8378Ddd847A00e93BaD918f2AF352991AEC6cDA3', 
        password: '0x85b01395c39a5540be6ddd377b697c87002843e0af615b4bc58f7e735db17cb4' 
    },
    456789012345: { 
        username: '0xBcAd74a7eA899FF54b2bF4d426d4484A34e1584D', 
        password: '0x6a4e63faca753bd034eb6dd06a50fbd9605c67ba783a53ab4e536b7675f253e0' 
    },
    567890123456: { 
        username: '0xf4Ae75FE000fc49Ea8869e655BcdA1D75F21D2Ab', 
        password: '0x79d10431bd2f8c7d7c15e22b4bc0289c7d4ad70e917153aff926650366d439fd' 
    },
    678901234567: { 
        username: '0xb749E21f89504bE5F1bEEdE3fC8d8d6e322bb41f', 
        password: '0x27ba5e810846bcef0d4164b942625b9ce389233972d0d3ff62b135ce91a8bd84' 
    },
    789012345678: { 
        username: '0x9D8bdF0B7eb1F8A52e20db1e273873632E89Ce2d', 
        password: '0x9f0210083707d109ee73a370e4840dd66160727a0df6bb7db2b58b57607bd56b' 
    },
    890123456789: { 
        username: '0x67E0f02F9887D4c676c7b827a868d75F64Cee2cc', 
        password: '0x457f97ffe8193654bafd25f4eaebb265e9fc832ae6091441571b44b09f6f84f9' 
    },
    901234567891: { 
        username: '0x3783D1D0c43318500dC1191eB7e499b85F97b554', 
        password: '0xdd4b97610efda88229f7d0ad092a165b89ab1b9c83f24a302c944803e3ec290e' 
    },
    123456789120: { 
        username: '0x11a584FE3094257014ef2eCB98F8F0465e058643', 
        password: '0xeac92040ce633f33bc35d9d978667faed236fc66afc3b872c99467ee3e8539ed' 
    }
}

console.log(cardHolders[123456789120].username);

// Checking balance
// web3.eth.getBalance(cardHolders[0]).then(console.log)

// Sending coins between accounts
// web3.eth.sendTransaction({
//     from: cardHolders[0],
//     gasPrice: "20000000000",
//     gas: "6500000",
//     to: cardHolders[1],
//     value: "1000000000000000000",
//     data: "0x",
// }, "0x52a8d3680eb056595bf75a58fa0306162fa90a68b6a02e3af41dde1383fa2de2").then(console.log)
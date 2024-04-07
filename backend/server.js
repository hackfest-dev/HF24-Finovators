import express from "express";
import Web3 from "web3";
import cors from "cors";


const app = express()
const web3 = new Web3("http://localhost:7545") 

const cardHolders = {
    123456789012: { 
        username: '0xC6c129934ca6D7d6EF82676419e81d021d28eE58', 
        password: '0xb6bf2312a1aa73cc008165ea78014d4ed4fa4e727543e19b0715f2d844706383' 
    },
    234567890123: { 
        username: '0xfF5e3647c46ac7A8b61B5550756029ed2042C823', 
        password: '0xbf1111d6e126ed30b6c24ec5d4b88219508bca1af718988c267c0e4cde3ebc75' 
    },
    345678901234: { 
        username: '0xa2Ad0fFD6a729Ec7F37E4d0E2D8a4f92b564ea4d', 
        password: '0xeafccaf8123ca49f74aa11a1ce4e9d9f19ba6121590a3a173d9b607d8b0b62aa' 
    },
    456789012345: { 
        username: '0x2cb99d3EAAECc56417adB0AF15187cB2e953E451', 
        password: '0x4caaa5d466e3a451dfe7ba91e710eedb6503fb2e8f69a03d4d33eba76ee7620b' 
    },
    567890123456: { 
        username: '0x6364d6Ab7fd621A3463523Fe55050079a7E6F49b', 
        password: '0x2bceae968f0c90002ff4660458367d50ca30cb8ea7c1864690a060d07522c92c' 
    },
    678901234567: { 
        username: '0xB2Ab2e242578309F85721f4029D341259c80AE91', 
        password: '0x3611a67ffdc9457687a115d3a4432a467b223e3ee951946d7534fb668df02bd8' 
    },
    789012345678: { 
        username: '0xe987555152Af3553E2C904162280423E93E6E6f4', 
        password: '0xf8857cc9256b751838ac0fcad97d6f6a74f06f8fbae5beb44bcbaae6fecec9d5' 
    },
    890123456789: { 
        username: '0x6e82BD2861DBC962ba46fC2b2DE52da48B8BbfB9', 
        password: '0xebf24eb853a5d7b9cc3fe0e4fd400d35577159661484a997aa1326e652249939' 
    },
    901234567891: { 
        username: '0x3938b0f398D351A962DbB8d15034F8c67bDF119b', 
        password: '0xe499de57ba4b83dff7332a3d04e288509eaa4067e1c6b7bf2c6b139486622316' 
    },
    123456789120: { 
        username: '0xcdD532E56Fab2b0A67a6c76F1DD352B112B6f28E', 
        password: '0x53ea6a80ba69709706f57580c8dbcdb27c97ef2777d06929833fad8a7caf7e26' 
    }
}

let blackList = [123456789120, 901234567891, 123456789012]
app.use(cors({
    origin: "http://127.0.0.1:5500"
}));
app.use(express.json())


// If you want to run your own Ethereum network locally, you can use Ganache.
app.listen(3000, () => {
    console.log("Server Started on port 3000");
})


app.get("/", (req, res) => {
    res.send("Test")
})


app.post("/transaction", async (req, res) => {
    const userCredentials = req.body;
    console.log(userCredentials);

    if (userCredentials.cardNumber in blackList)
        res.send({status: 'Transaction Failed'})

    let result = await web3.eth.sendTransaction({
        from: cardHolders[userCredentials.cardNumber].username,
        to: cardHolders[userCredentials.recipentCardNo].username,
        gasPrice: "20000000000", //  * userCredentials.amtToTransfer,
        gas: "6500000",
        value: String(1000000000000000000 * userCredentials.amount),
        data: "0x",
    }, cardHolders[userCredentials.cardNumber].password)

    console.log(result);

    // machine learning
    let ideal = [3.85478, 5.55495, -8.71064, 2.64506, -1.51698, 1.95391, -1.70773,	-2.05395, -3.09575, 1.80127, 8.43131, -1.79688, 1.71481, 1.45806, 3.56018, 1.39883, -7.39469, 4.38647, 9.16986, 5.37832,	1.6556,8.21774,	5.37426, 4.45428, 1.42849, 1.69326, -3.68358, -1.22214]
    let corrupted = [-1.169203413, 1.863413535,	-2.515135481, 5.463680646, -0.297971323, 1.36491804, 0.759218697, -0.118860977, -2.293921422, -0.423783865,	2.375875617, -3.244827299, -0.556619005, -5.152474834, 0.050906325, -1.022045026, -1.646504846,	0.126459753, 1.819012764, -0.299374113, -0.39308999, -0.70869235, 0.471308703, -0.078616047, -0.544654651, 0.014776756, -0.240929959, -0.781055196] 

    
    res.json({status: 'Transaction successfull'})
})

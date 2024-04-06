import { useState } from 'react'
import './App.css'
import { useRef } from 'react';

function App() {
  const [creditCardNo, setCreditCardNo] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [amtToTransfer, setAmtToTransfer] = useState("");
  const [recieverAccNo, setRecieverAccNo] = useState("");
  const [transactionStatus, setTransactionStatus] = useState(null);

  const transactionBlock = useRef(null);

  const transactHandler = async () => {
    // If required, add validity check 
    // if invalid then raise alert and ask user to make it valid

    const data = {
      creditCardNo: creditCardNo,
      expiryDate: expiryDate,
      cvv: cvv,
      amtToTransfer: amtToTransfer,
      recieverAccNo: recieverAccNo
    }
    let response = await fetch("http://localhost:3000/transact", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    let res = await response.json()   // tbd 
    if (res.transactionStatus === 'Sucess') {
      setTransactionStatus("Transaction Succeded");
      transactionBlock.current.style.backgroundColor = 'green';
    } else if (res.transactionStatus === 'Fail') {
      setTransactionStatus("Transaction Failed");
      transactionBlock.current.style.backgroundColor = 'red';
    }
  }

  return (
    <>
        <label>Credit Card No.:</label>
        <input 
          name='creditCardNo' 
          type='text'
          value={creditCardNo}
          onChange={(e) => setCreditCardNo(e.target.value)} />
        <br />
        <label>Expiry Date:</label>
        <input 
          name='expiryDate' 
          type='text'
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)} />
        <br />
        <label>CVV No.:</label>
        <input
          name='cvv'
          type='password'
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}/>
        <br />
        <label>Amount To Transfer:</label>
        <input
          name='amtToTransfer'
          type='text'
          value={amtToTransfer}
          onChange={(e) => setAmtToTransfer(e.target.value)}/>
        <br />
        <label>Reciever Acc No.:</label>
        <input
          name='recieverAccNo'
          type='text'
          value={recieverAccNo}
          onChange={(e) => setRecieverAccNo(e.target.value)}/>
        <br />     

        <button onClick={transactHandler}>Send Money</button>

        <div style={{'width': 100, 'height': 100, 'backgroundColor': 'green'}} ref={transactionBlock}>

        </div>
        <h1>{transactionStatus}</h1>
    </>


  )
}

export default App

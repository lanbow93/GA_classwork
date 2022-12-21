import Receipts from './components/Receipts';
import receipts from './receiptData';
import Form from './components/Form';
import React from 'react';
import {useState} from 'react'

import './App.css';

function App() {

  const [receiptList, setReceiptList] = useState(receipts)

  const handleEvent = (event) => {
    event.preventDefault();
    console.log(event.target)
  }

  return (
    <div className="App">
      <h1>Korilla Receipts</h1>
      <Form handler={handleEvent} />
      <Receipts orderInformation={receiptList}/>
    </div>
  );
}

export default App;

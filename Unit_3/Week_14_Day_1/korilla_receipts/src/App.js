import Receipts from './components/Receipts';
import receipts from './receiptData';
import Form from './components/Form';
import {useState} from 'react'
import './App.css';

function App() {

  const [receiptList, setReceiptList] = useState(receipts)

  const [form, setForm] = useState("")

  const handleChange = (event) => {setForm(event.target.value)}
  const handleEvent = (event) => {
    event.preventDefault();
    console.log(form)
    if(form) {
      let wasNotFound = true 
      for(let receipt of receipts) {
        if (receipt.person == form) {
          setReceiptList([receipt]);
          wasNotFound = false;
        }
      }
      if(wasNotFound) {
        setReceiptList([])
      }
      
    } else {
      setReceiptList(receipts)
    }
  }

  return (
    <div className="App">
      <h1>Korilla Receipts</h1>
      <Form eventHandler={handleEvent} changeHandler={handleChange} form={form} setForm={setForm}  />
      <Receipts orderInformation={receiptList}/>
    </div>
  );
}

export default App;

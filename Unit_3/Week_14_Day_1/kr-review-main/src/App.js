import {useState} from "react"
import Form from "./components/Form"
import Receipts from "./components/Receipts"
import rawReceipts from "./receipts"
import './App.css';

function App() {

  const [receipts, setReceipts] = useState(rawReceipts)

  const getReceipts = (search) => {
    console.log(search)
    let newReceipts;
    if (search === "") {
      setReceipts(rawReceipts)
    } else {
      newReceipts = rawReceipts.filter((receipt) => receipt.name === search)
      setReceipts(newReceipts)
    }
  }

  const container = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  }

  return (
    <div className="App">
      <h1>Korilla Receipts</h1>
      <Form search={getReceipts}/>
      <div style={container}><Receipts receipts={receipts}/></div>
      
    </div>
  );
}

export default App;

import Receipts from './components/Receipts';
import receipts from './receiptData';
import Form from './components/Form';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Korilla Receipts</h1>
      <Form/>
      <Receipts orderInformation = {receipts} />
    </div>
  );
}

export default App;

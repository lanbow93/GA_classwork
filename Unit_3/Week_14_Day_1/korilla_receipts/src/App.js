import Receipts from './components/Receipts';
import Form from './components/Form';

import './App.css';

function App() {
  return (
    <div className="App">
      <Form/>
      <Receipts orderInformation={Receipts} />
    </div>
  );
}

export default App;

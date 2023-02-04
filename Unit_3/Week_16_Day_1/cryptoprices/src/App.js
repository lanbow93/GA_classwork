import logo from './logo.svg';
import './App.css';
import router from './router';
import { Outlet } from 'react-router-dom';
import Nav from './components/nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Outlet/>
    </div>
  );
}

export default App;

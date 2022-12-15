import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Board from './components/Board';
import Player from './components/Player'

function App() {
  return <>
    <Header/>
    <Player currentPlayer="X" />
    <Player currentPlayer="O" />
    <Board/>
    </>;
}

export default App;
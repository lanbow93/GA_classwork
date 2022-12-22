import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import BookSearchMenu from './components/BookSearchMenu';

function App() {
  return (
    <div className="App">
      <h1>My Personal Library</h1>
      <Navbar />
      <BookSearchMenu />
    </div>
  );
}

export default App;

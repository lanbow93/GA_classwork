import logo from './logo.svg';
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';
import {useState, useEffect} from 'react'

function App() {

  // Movie State
  const [movie, setMovie] = useState(null)

  // Function to get movie
  const getMovie = async (searchTerm) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${searchTerm}`)
    const data = await response.json();
    setMovie(data)
  }

  useEffect(() => {
    getMovie("Swiss Army Man")
  }, [])

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;

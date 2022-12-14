import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';


function Example(props) {
  return <h1>{props.children}</h1>
}

function App() {

  const cheese = "Gouda"
  const someJSX = <h1>Hello World</h1>

  return (
    <div className="App">
      {5 + 5 + " Hello"}
      {someJSX}
      <Header></Header>
      <Footer/>
      <Example weeeee={cheese}>
        I am the props.children area
        
      </Example>
      
    </div>
  );
}

export default App;

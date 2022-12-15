import logo from './logo.svg';
import './App.css';
import Reviews from './components/Reviews';
import AverageRating from './components/AverageRating';
import SentimentAnalysis from './components/SentimentAnalysis';
import WebsiteVisitors from './components/WebsiteVisitors'
import Navigation from './components/Navigation';


function App() {
  return (<div className="displayWindow">
    <Navigation/>
    <Reviews/>
    <AverageRating/>
    <SentimentAnalysis/>
    <WebsiteVisitors/>

  </div>);
}

export default App;

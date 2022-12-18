import Counter from "./components/Counter.js"
import "./App.css"
import InputDisplay from "./components/InputDisplay.js";
import PropTricks from "./components/PropTricks.js";
import data from "./components/Data.js";
import RenderArray from "./components/RenderArray.js";

function App() {
  console.log("App Rendered")
  const tricksProps = { cheese: "Gouda", bread: "Rye", vegatable: "Turnip", dessert: "Bread Pudding"}
  return <>
    <Counter/>
    <InputDisplay />
    <PropTricks {...tricksProps} />
    <RenderArray data={data} />
  </>
  
}

export default App;

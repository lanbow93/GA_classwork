import { useState } from "react";
import Button from "./Button";
import Display from "./Display"

function Counter(props){
    // let count = 0;
  const [count, setCount] = useState(0)
  console.log(count);

  function countUp() {
    setCount(count + 1)
  }
  function countDown() {
    setCount(count - 1)
  }

  
  return (
    <div className="App">
      <Display displayValue={count} />
      <Button label="+1" click={countUp} bg="green" />
      <Button label="-1" click={countDown} bg="red" />
    </div>
  );
}

export default Counter;
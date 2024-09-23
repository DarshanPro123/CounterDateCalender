import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // const date
  const date = new Date();
  const today = date.toLocaleDateString();
  console.log(today);
  const decreseCount = () => {
    {
      count > 0 ? setCount((c) => c - 1) : count;
    }
  };
  const increseCount = () => {
    {
      count <= 20 ? setCount((c) => c + 1) : count;
    }
  };

  return (
    <>
      <div>
        <div className="counter-box">
          <button onClick={decreseCount}> - </button>
          <h2>{count}</h2>
          <button onClick={increseCount}> + </button>
        </div>
        <h1>Today Current Date is : {today}</h1>
      </div>
    </>
  );
}

export default App;

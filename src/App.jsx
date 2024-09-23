import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [steps, setSteps] = useState(1);
  // const date
  const date = new Date();
  date.setDate(date.getDate() + count);
  console.log(date);
  const decreseCount = () => {
    {
      count > -20 ? setCount((c) => c - steps) : count;
    }
  };
  const increseCount = () => {
    {
      count < 20 ? setCount((c) => c + steps) : count;
    }
  };

  const decreseSteps = () => {
    {
      steps > 0 ? setSteps((stp) => stp - 1) : steps;
    }
  };
  const increseSteps = () => {
    {
      steps < 20 ? setSteps((stp) => stp + 1) : alert("No more , warning!! 🥵");
    }
  };

  return (
    <>
      <div>
        <div className="step-box">
          <h3>Steps:</h3>
          <div className="btns">
            {" "}
            <button onClick={decreseSteps}>-</button>
            <h2>{steps}</h2>
            <button onClick={increseSteps}>+</button>
          </div>
        </div>
        <div className="counter-box">
          <h3>Counter</h3>
          <div className="btns">
            <button onClick={decreseCount}> - </button>
            <h2>{count}</h2>
            <button onClick={increseCount}> + </button>
          </div>
        </div>
        <h1>
          <span>
            {count === 0
              ? "Today is"
              : count > 0
              ? `${count} Days from`
              : count < 0
              ? `${Math.abs(count)} Days ago`
              : ""}
          </span>{" "}
          <span>{date.toDateString()}</span>
        </h1>
      </div>
    </>
  );
}

export default App;

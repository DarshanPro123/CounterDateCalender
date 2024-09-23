import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // const date
  const date = new Date();
  date.setDate(date.getDate() + count);
  console.log(date);
  const decreseCount = () => {
    {
      count > -20 ? setCount((c) => c - 1) : count;
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
        <h1>
          {" "}
          {`${count === 0 ? "Today is " : ""} ${
            count > 1 ? `${count} Days to` : ""
          } ${
            count < -1 ? `${Math.abs(count)} Days ago` : ""
          } ${date.toDateString()}`}
        </h1>
      </div>
    </>
  );
}

export default App;

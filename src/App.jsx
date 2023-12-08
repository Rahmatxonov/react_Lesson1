import "./App.css";
import { useMemo, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <button onClick={() => setDark((prevDark) => !prevDark)}>
        {" "}
        Change Theme
      </button>
      {doubleNumber}
      {/* {number} */}
      <button onClick={() => setNumber(number + 1)}>+</button>
      <div className="card" style={themeStyle}>
        Hello World
      </div>
    </>
  );
}

function slowFunction(num) {
  console.log("Slow function is working");
  for (let index = 0; index < 1200000; index++) {
    return num * 2;
    // return;
  }
}
export default App;

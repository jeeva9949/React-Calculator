
import { useState } from 'react';
import './App.css';

function App() {
  const [input, setinput] = useState("")
  const [result, setresult] = useState(0);
  return (
    <div className="App">
      <h1 style={{color:"skyblue",textDecoration:"underline"}}>Simple Calculator </h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter Here"
          value={input}
          onChange={(e) => {
            setinput(e.target.value);
          }}
        />
        <br />
        <button onClick={() => setresult(eval(input))} className="result-btn">
          Result
        </button>
        <h1>Result is : {result}</h1>
      </div>
      <div className="number-section">
        <button className="btn" onClick={() => setinput(input + "1")}>
          1
        </button>
        <button className="btn" onClick={() => setinput(input + "2")}>
          2
        </button>
        <button className="btn" onClick={() => setinput(input + "3")}>
          3
        </button>
        <button className="btn" onClick={() => setinput(input + "+")}>
          +
        </button>
      </div>
      <div className="number-two">
        <button className="btn" onClick={() => setinput(input + "4")}>
          4
        </button>
        <button className="btn" onClick={() => setinput(input + "5")}>
          5
        </button>
        <button className="btn" onClick={() => setinput(input + "6")}>
          6
        </button>
        <button className="btn" onClick={() => setinput(input + "-")}>
          -
        </button>
      </div>
      <div className="number-three">
        <button className="btn" onClick={() => setinput(input + "7")}>
          7
        </button>
        <button className="btn" onClick={() => setinput(input + "8")}>
          8
        </button>
        <button className="btn" onClick={() => setinput(input + "9")}>
          9
        </button>
        <button className="btn" onClick={() => setinput(input + "*")}>
          *
        </button>
      </div>
      <div className="opertor-section">
        <button className="btn" onClick={() => setinput(input + "/")}>
          /
        </button>
        <button className="btn" onClick={() => setinput("")}>
          clr
        </button>
      </div>
    </div>
  );
}

export default App;

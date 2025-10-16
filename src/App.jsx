import React from "react";
import { useState } from "react";
const App = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calBmi = (e) => {
    e.preventDefault();

    if (weight == 0 || height == 0) {
      alert("Please enter correct value");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi <= 25) {
        setMessage("You are underweight");
      } else if (bmi > 25 && bmi <= 30) {
        setMessage("You are healthy");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <form onSubmit={calBmi}>
        <div>
          <label>Weight(lbs)</label>
          <input
            type="text"
            placeholder="Enter the weight value"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <div>
          <label>Height</label>
          <input
            type="text"
            placeholder="Enter the height value"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload}>
              Reload
            </button>
          </div>
        </div>

        <div className="center">
          <h3>Your BMI is :{bmi}</h3>
          <p>{message}</p>
        </div>
      </form>
    </div>
  );
};

export default App;

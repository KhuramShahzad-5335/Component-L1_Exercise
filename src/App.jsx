import { useState } from "react";
import "./App.css";

// import all the components here
import ArrowFunc from "./components/L_1-1";
import RegularFunc from "./components/L_1-1";

import ReactComponent from "./components/L_1-2";

import ReactComponentExp from "./components/L_1-3";

import PureVsJsFunc from "./components/L_1-4";

import BtnFieldComponent from "./components/L_1-5";

import ReusableBtn from "./components/L_1-6";

import ResuableInputfield from "./components/L_1-7";

import ReusableAlertbox from "./components/L_1-8";

function App() {
  const sol_styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    maxheight: "80vh",
    height: "auto",
    maxwidth: "90vw",
    width: "auto",
    margin: "20px 0",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    background: "black",
  };

  const handleOnClickEvent = () => {
    console.log("Button Clicked");
  };

  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <section className="Level1-Solutions">
        <div className="Level1_wrapper">
          <h1
            style={{
              textAlign: "center",
              background: "#159",
              padding: "40px",
            }}>
            Level - 1 Solutions
          </h1>
        </div>
        <div className="Solutions-container">
          <div className="sol" style={sol_styles}>
            <h2 id="q-no">DIFF B/W REGULAR AND ARROW FUNCTION</h2>
            <RegularFunc />
            <ArrowFunc />
          </div>

          <div className="sol" style={sol_styles}>
            <h2 id="q-no">WHAT IS REACT COMPONENT?</h2>
            <ReactComponent />
          </div>

          <div className="sol" style={sol_styles}>
            <h2 id="q-no">How do you make a React functional component?</h2>
            <ReactComponentExp />
          </div>

          <div className="sol" style={sol_styles}>
            <h2 id="q-no">
              What is the difference between a pure JavaScript function and a
              functional component?
            </h2>
            <PureVsJsFunc />
          </div>

          <div className="sol" style={sol_styles}>
            <h2 id="q-no">Can we make a button or input field component?</h2>
            <BtnFieldComponent />
          </div>

          <div className="sol" style={sol_styles}>
            <h2 id="q-no">Can we make a button or input field component?</h2>
            <ReusableBtn label="Login" onClick={handleOnClickEvent} />
            <ReusableBtn label="Signup" onClick={handleOnClickEvent} disabled />
          </div>
          <div className="sol" style={sol_styles}>
            <h2 id="q-no">Make a reusable InputField component</h2>
            <div>
              <ResuableInputfield
                value={inputValue}
                onChange={handleInputChange}
                type="email"
                placeholder="Emails"
              />
            </div>
            <div>
              <ResuableInputfield
                value={inputValue}
                onChange={handleInputChange}
                type="password"
                placeholder="Password"
              />
            </div>
            <div>
              <ResuableInputfield
                value={inputValue}
                onChange={handleInputChange}
                type="date"
                placeholder="Message"
              />
            </div>
          </div>

          <div className="sol" style={sol_styles}>
            <h2 id="q-no">
              Make a reusable alert box component with one div parent element
              and one p child element of the div(warning alert box, success
              alert box).
            </h2>
            <div>
              <ReusableAlertbox
                type="warning"
                message="Warning: Something went wrong : ("
              />
              <ReusableAlertbox
                type="success"
                message="Success: Your action was successful : )"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

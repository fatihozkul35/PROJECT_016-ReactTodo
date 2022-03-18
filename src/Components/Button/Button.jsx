import React from "react";
import "./Button.css";
const Button = ({ show, setShow }) => {
  return (
    <>
      {show && (
        <div className="text-box">
          <button className="glow-on-hover" onClick={() => setShow(!show)}>
            Close Add Task Bar
          </button>
        </div>
      )}
      {!show && (
        <button className="glow-on-hover" onClick={() => setShow(!show)}>
          Show Add Task Bar
        </button>
      )}
    </>
  );
};

export default Button;

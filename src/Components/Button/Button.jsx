import React from "react";

const Button = ({ show, setShow }) => {
  return (
    <>
      {show && (
        <button onClick={() => setShow(!show)}>Close Add Task Bar</button>
      )}
      {!show && (
        <button onClick={() => setShow(!show)}>Show Add Task Bar</button>
      )}
    </>
  );
};

export default Button;

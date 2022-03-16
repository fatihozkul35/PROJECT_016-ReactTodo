import React from "react";

const Button = ({ show, setShow }) => {
  return (
    <>
      <button onClick={() => setShow(!show)}>Show Add Task Bar</button>
    </>
  );
};

export default Button;

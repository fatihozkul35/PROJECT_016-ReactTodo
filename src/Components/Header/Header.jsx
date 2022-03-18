import React from "react";
import AddTask from "../AddTask/AddTask";
import Button from "../Button/Button";
import Tasks from "../Tasks/Tasks";
import { useState } from "react";
import "./Header.css";
import { headerContainer } from "../styles/styles";
const Header = () => {
  const [show, setShow] = useState(true);
  const [todos, setTodos] = useState([
    { task: "ali", date: "1203" },
    { task: "veli", date: "2425413" },
    { task: "mahmut", date: "685431" },
    { task: "muzo", date: "12635131" },
    { task: "hakabn", date: "1246846" },
    { task: "tatar", date: "1206641" },
  ]);
  return (
    <div className="header" style={headerContainer}>
      <h1 className="title text-center">Task Tracker</h1>

      <div className="text-center mb-4">
        <Button setShow={setShow} show={show} />
      </div>
      {show && <AddTask setTodos={setTodos} todos={todos} />}
      <Tasks setTodos={setTodos} todos={todos} />
    </div>
  );
};

export default Header;

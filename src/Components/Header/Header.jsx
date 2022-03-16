import React from "react";
import AddTask from "../AddTask/AddTask";
import Button from "../Button/Button";
import Tasks from "../Tasks/Tasks";
import { useState } from "react";
const Header = () => {
  const [show, setShow] = useState(true);
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <h1>Task Tracker</h1>
      <Button setShow={setShow} show={show} />
      {show && <AddTask setTodos={setTodos} todos={todos} />}
      <Tasks setTodos={setTodos} todos={todos} />
    </div>
  );
};

export default Header;

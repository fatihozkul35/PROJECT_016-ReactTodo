import React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import "../Button/Button";
import { taskListLi } from "../styles/styles";
import "../Button/Button";
import "./Tasks.css";
const Tasks = ({ todos, setTodos }) => {
  const handleIcon = (item) => {
    const newTodos = todos.filter((todo) => todo.task !== item.task);
    setTodos(newTodos);
  };
  const handleDeaktiv = (e) => {
    e.currentTarget.classList.toggle("aktiv");
  };

  return (
    <>
      <ul>
        {todos.map((todo, i) => {
          return (
            <div
              key={i}
              className="justify-content-around mt-4 align-items-center task"
              onClick={(e) => handleDeaktiv(e)}
            >
              <li style={taskListLi}>{todo.task}</li>
              <li style={taskListLi}>{todo.date}</li>
              <button
                className="glow-on-hover d-flex justify-content-center align-items-center"
                style={{ width: "3rem", height: "2rem" }}
                onClick={() => handleIcon(todo)}
              >
                <AiOutlineMinus />
              </button>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Tasks;

import React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import "../Button/Button";
import { taskListLi } from "../styles/styles";
import "../Button/Button";
import "./Tasks.css";

const Tasks = ({ todos, setTodos }) => {
  const handleRemove = (e, item) => {
    // e.stopPropagation();
    e.currentTarget.parentNode.remove();
    todos = todos.filter((todo) => todo.task !== item.task);
  };

  const handleDeaktiv = (e) => {
    console.log("aktiv calıstı");
    e.currentTarget.classList.toggle("aktiv");
  };

  return (
    <>
      <div className="mx-4">
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
                onClick={(e) => handleRemove(e, todo)}
              >
                <AiOutlineMinus />
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Tasks;

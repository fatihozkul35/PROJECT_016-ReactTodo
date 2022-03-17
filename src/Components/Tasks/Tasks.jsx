import React from "react";
import { FaBeer } from "react-icons/fa";
// import { styles } from "../styles/styles";
const Tasks = ({ todos, setTodos }) => {
  return (
    <>
      <ul>
        {todos.map((todo, i) => {
          return (
            <div key={i}>
              <li>{todo.task}</li>
              <span>{todo.date}</span>
              <FaBeer />
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Tasks;

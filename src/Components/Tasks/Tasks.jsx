import React from "react";

const Tasks = ({ setTodos, todos }) => {
  return (
    <>
      <ul>
        {todos.map((todo, i) => {
          return <li key={i}>{todo.task}</li>;
        })}
      </ul>
    </>
  );
};

export default Tasks;

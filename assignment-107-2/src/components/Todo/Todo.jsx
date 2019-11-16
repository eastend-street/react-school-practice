import React from "react";
import "./Todo.scss";

const Todo = ({ todo, switchDone, index }) => {
  return (
    <li className="todo" key={index} onClick={() => switchDone(index)}>
      <div
        style={
          todo.isDone
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {todo.name}
      </div>
    </li>
  );
};

export default Todo;

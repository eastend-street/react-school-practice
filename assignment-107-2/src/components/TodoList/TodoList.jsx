import React from "react";
import "./TodoList.scss";

const TodoList = ({ todoList, switchDone }) => {
  return (
    <ul className="todo-list">
      {todoList.map((todo, index) => {
        return (
          <li className="todo" key={index} onClick={() => switchDone(index)}>
            {todo.isDone ? "done" : todo.name}
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;

import React from "react";

const TodoList = ({ todoList, switchDone }) => {
  return (
    <ul>
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

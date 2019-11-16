import React from "react";
import "./TodoList.scss";

import Todo from "../Todo/Todo";

const TodoList = ({ todoList, switchDone }) => {
  return (
    <ul className="todo-list">
      {todoList.map((todo, index) => {
        return <Todo todo={todo} switchDone={switchDone} index={index} />;
      })}
    </ul>
  );
};

export default TodoList;

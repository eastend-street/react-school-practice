import React from "react";
import "./AddTodo.scss";

const AddTodo = ({ todoList }) => {
  return (
    <div className="add-todo">
      <input type="text" className="input-todo" />
      <button className="add-button">Add Todo</button>
    </div>
  );
};

export default AddTodo;

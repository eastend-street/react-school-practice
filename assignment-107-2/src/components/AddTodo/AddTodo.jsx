import React, { useState } from "react";
import "./AddTodo.scss";

const AddTodo = ({ todoList, add }) => {
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = e => {
    e.preventDefault();
    add({
      id: todoList.length + 1,
      name: inputValue,
      isDone: false
    });
  };

  return (
    <div className="add-todo">
      <form onSubmit={e => handleOnChange(e)}>
        <input
          type="text"
          className="input-todo"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button type="submit" className="add-button">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;

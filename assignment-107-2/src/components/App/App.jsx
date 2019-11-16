import React, { useState } from "react";
import "./App.scss";
import AddTodo from "../AddTodo/AddTodo";
import TodoList from "../TodoList/TodoList";

const App = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: "go home",
      isDone: false
    },
    {
      id: 2,
      name: "do assignment",
      isDone: false
    },
    {
      id: 3,
      name: "buy tomato",
      isDone: false
    }
  ]);

  const handleOnClick = doneTodoIndex => {
    setTodoList(
      todoList.map((todo, index) => {
        if (index === doneTodoIndex) {
          todo.isDone = true;
        }
        return todo;
      })
    );
  };

  return (
    <div className="container">
      <div className="wrap-todo">
        <AddTodo />
        <TodoList todoList={todoList} switchDone={handleOnClick} />
      </div>
    </div>
  );
};

export default App;

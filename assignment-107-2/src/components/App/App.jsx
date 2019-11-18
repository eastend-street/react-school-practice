import React, { useState } from "react";
import "./App.scss";
import AddTodo from "../AddTodo/AddTodo";
import TodoList from "../TodoList/TodoList";
import TodoFilter from "../TodoFilter/TodoFilter";
import activeStates from "../Constants/TodoConstants";

const App = () => {
  const [selectedFilter, setSelectedFilter] = useState(activeStates.ALL);
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
  // const [filteredList, setFilteredList] = useState(todoList);

  const changeFilter = filterName => {
    setSelectedFilter(filterName);
  };

  const switchDone = doneTodoIndex => {
    setTodoList(
      todoList.map((todo, index) => {
        if (index === doneTodoIndex) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      })
    );
  };

  const add = newTodo => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div className="container">
      <div className="wrap-todo">
        <AddTodo todoList={todoList} add={add} />
        <TodoFilter
          selectedFilter={selectedFilter}
          changeFilter={changeFilter}
        />
        <TodoList
          todoList={todoList.filter(todo => {
            if (selectedFilter === activeStates.COMPLETED) {
              return todo.isDone;
            } else if (selectedFilter === activeStates.ACTIVE) {
              return !todo.isDone;
            } else {
              return todo;
            }
          })}
          switchDone={switchDone}
        />
      </div>
    </div>
  );
};

export default App;

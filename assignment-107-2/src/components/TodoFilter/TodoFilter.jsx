import React from "react";
import "./TodoFilter.scss";

const TodoFilter = () => {
    
  return (
    <div className="todo-filter">
      <ul>
        <li>
          <div className="filter-button">All</div>
        </li>
        <li>
          <div className="filter-button">Active</div>
        </li>
        <li>
          <div className="filter-button">Completed</div>
        </li>
      </ul>
    </div>
  );
};

export default TodoFilter;

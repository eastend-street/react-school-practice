import React from "react";
import "./TodoFilter.scss";
import activeStates from "../Constants/TodoConstants";

const TodoFilter = ({ selectedFilter, changeFilter }) => {
  console.log(selectedFilter);
  return (
    <div className="todo-filter">
      <ul>
        <li>
          <div
            className="filter-button"
            onClick={() => changeFilter(activeStates.ALL)}
          >
            All
          </div>
        </li>
        <li>
          <div
            className="filter-button"
            onClick={() => changeFilter(activeStates.ACTIVE)}
          >
            Active
          </div>
        </li>
        <li>
          <div
            className="filter-button"
            onClick={() => changeFilter(activeStates.COMPLETED)}
          >
            Completed
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TodoFilter;

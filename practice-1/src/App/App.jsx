import React from "react";
import AxiosComp from "../AxiosComp/AxiosComp";
import ClassNameComp from "../ClassNameComp/ClassNameComp";
import "./App.scss";

function App() {
  return (
    <div className="container">
      <div>
        <AxiosComp />
        <ClassNameComp />
      </div>
    </div>
  );
}

export default App;

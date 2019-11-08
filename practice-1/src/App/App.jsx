import React from "react";
import AxiosComp from "../AxiosComp/AxiosComp";
import ClassNameComp from "../ClassNameComp/ClassNameComp";
import ReactMediaComp from "../ReactMediaComp/ReactMediaComp";
import "./App.scss";

function App() {
  return (
    <div className="container">
      <div>
        <AxiosComp />
        <ClassNameComp />
        <ReactMediaComp />
      </div>
    </div>
  );
}

export default App;

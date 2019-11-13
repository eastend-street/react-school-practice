import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Works from "./components/Works/Works";
import Works1 from "./components/Works/Works1";
import Works2 from "./components/Works/Works2";
import Works3 from "./components/Works/Works3";
import Contact from "./components/Contact/Contact";
import HeaderNav from "./components/HeaderNav.jsx";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderNav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/works" exact component={Works} />
        <Route path="/works/1" exact component={Works1} />
        <Route path="/works/2" exact component={Works2} />
        <Route path="/works/3" exact component={Works3} />
        <Route path="/contact" exact component={Contact} />
        <Route>This is 404 page.</Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

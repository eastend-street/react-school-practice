import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import IndexPage from "./components/IndexPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import HeaderNav from "./components/HeaderNav.jsx";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderNav />
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route>This is 404 page.</Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

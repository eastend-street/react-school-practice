import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import IndexPage from "./components/IndexPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={IndexPage}/>
        <Route path="/about" exact component={AboutPage}/>
        <Route path="/contact" exact component={ContactPage}/>
        <Route>This is 404 page.</Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

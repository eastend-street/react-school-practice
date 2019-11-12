import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={()=> <div>This is index page.</div>}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

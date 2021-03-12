import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./home";
import Result from "./result";
import "./App.css";
const App = () => {
  const [state, setState] = useState(null);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home setState={setState} />
        </Route>

        <Route path="/result">
          <Result state={state} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

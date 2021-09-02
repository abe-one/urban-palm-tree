import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import HomePlans from "./components/HomePlans";
import Lots from "./components/Lots";

function App() {
  return (
    <div className="App">
      <header>
        {" "}
        <h1>Atmos</h1>
        <nav>
          <Link to="/homes">Home Plans</Link>
          <Link to="/lots">Lots</Link>
        </nav>
      </header>
      <Switch>
        <Route path={"/homes"}>
          <HomePlans />
        </Route>
        <Route path="/lots">
          <Lots />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

import React, { useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";
import HomePlans from "./components/HomePlans";
import Lots from "./components/Lots";
import {
  fetchLots,
  fetchHomePlans,
  fetchCombinations,
} from "./utils/reduxStore/actions";
import CardGrid from "./components/CardGrid";

function App({ fetchLots, fetchHomePlans, fetchCombinations }) {
  useEffect(() => {
    fetchLots();
    fetchHomePlans();
    fetchCombinations();
  }, [fetchLots, fetchHomePlans, fetchCombinations]);

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
          <CardGrid stateKey="homePlans" />
        </Route>
        <Route path="/lots">
          <CardGrid stateKey="lots" />
        </Route>
      </Switch>
    </div>
  );
}

export default connect(null, { fetchLots, fetchHomePlans, fetchCombinations })(
  App
);

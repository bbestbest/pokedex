import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./configs/Routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback="...loading">
          <Switch>
            {Object.keys(Routes).map((routeKey) => (
              <Route Key={routeKey} {...Routes[routeKey]} />
            ))}
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

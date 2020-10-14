import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingScreen from "./pages/Landing";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingScreen} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

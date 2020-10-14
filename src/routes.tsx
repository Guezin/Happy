import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingScreen from "./pages/Landing";
import OrphanagesMapScreen from "./pages/OrphanagesMap";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingScreen} />
        <Route path="/orphanages" exact component={OrphanagesMapScreen} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LandingScreen from './pages/Landing'
import OrphanagesMapScreen from './pages/OrphanagesMap'
import OrphanageScreen from './pages/Orphanage'
import CreateOrphanageScreen from './pages/CreateOrphanage'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingScreen} />
        <Route path="/orphanages" exact component={OrphanagesMapScreen} />

        <Route path="/orphanages/create" component={CreateOrphanageScreen} />
        <Route path="/orphanages/:id" component={OrphanageScreen} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes

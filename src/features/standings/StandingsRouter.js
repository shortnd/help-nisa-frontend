import React from 'react';
import { Switch, Route, useParams } from 'react-router-dom';

import Index from './pages/Index';


const StandingsIndex = () => (<h1>Standings</h1>)

export const StandingsRouter = () => {
  const { path } = useParams();
  return (
    <Switch>
      <Route path={path}>
        <Index />
      </Route>
    </Switch>
  )
}

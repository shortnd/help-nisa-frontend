import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { Index as TeamsIndex } from './pages/Index';

export const TeamsRouter = () => {
  const { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <TeamsIndex />
      </Route>
    </Switch>
  )
}

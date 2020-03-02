import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Layout } from './utils/Layout';
import { StandingsRouter } from './features/standings/StandingsRouter';

const Index = () => (
  <Layout>
    <h2>Index</h2>
  </Layout>
)

export const Router = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Index />
        </Route>
        <Route path='/standings'>
          <StandingsRouter />
        </Route>
        {/* <Route path='/teams'>
          <TeamsRouter />
        </Route> */}
      </Switch>
    </BrowserRouter>
  </>
);

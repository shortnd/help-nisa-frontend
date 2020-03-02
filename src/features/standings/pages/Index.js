import React, { useEffect } from 'react';
import { Layout } from '../../../utils/Layout';

import StandingsTable from '../components/StandingsTable'
import Container from '../../../utils/styled/Container';
import { useSelector, useDispatch } from 'react-redux';
import { getStandings } from '../actions';


function Index() {
  const dispatch = useDispatch();
  const { standings } = useSelector(state => state.standings)

  useEffect(() => {
    if (!standings.length) {
      dispatch(getStandings())
    }
  }, [standings, dispatch])

  return (
    <Layout>
      <Container>
        <h1>Standings</h1>
        <StandingsTable
          standings={standings} />
      </Container>
    </Layout>
  )
}

export default Index

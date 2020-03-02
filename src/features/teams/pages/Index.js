import React, { useState, useEffect } from 'react'
import { Layout } from '../../../utils/Layout'

import { TeamList } from '../components/TeamList';

import axios from 'axios';

export const Index = () => {
  // const [teams, setTeams] = useState([]);
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   setLoading(true);
  //   axios.get(`https://nisa-helper-server.herokuapp.com/teams`)
  //     .then( res => {
  //       console.log(res)
  //       setLoading(false)
  //     }).catch(({ response }) => {
  //       console.log(response);
  //       setError(response.data.message)
  //       setLoading(false)
  //     })
  // }, [])

  // if (loading) return <h2>Loading...</h2>;

  // if (error) return <h2>Error</h2>;

  return (
    <Layout>
      <h2>Teams Index</h2>
      <TeamList />
    </Layout>
  )
}

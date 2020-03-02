import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { TeamItem } from './TeamItem';
import Skeleton from 'react-loading-skeleton';

export const TeamList = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://nisa-helper-server.herokuapp.com/teams`)
      .then(({ data }) => {
        setTimeout(() => {
          setLoading(false)
        }, 2000)
        setTeams(data)
      }).catch(({ response }) => {
        console.log(response);
        setError(response.data.message)
        setLoading(false)
      })
  }, []);

  if (loading) {
    return (
      <ul>
        <li>
          <Skeleton />
        </li>
      </ul>
    )
  }

  if (error) {
    return (
      <>
        <h2>{error}</h2>
      </>
    )
  }

  return (
    <>
      {teams.length ? (
        <ul>
          {teams.map(team => <TeamItem key={team.id} team={team} />)}
        </ul>
      ) : (
        <h2>No Teams</h2>
      )}
    </>
  )
}

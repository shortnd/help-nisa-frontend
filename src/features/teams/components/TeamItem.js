import React from 'react'
import Skeleton from 'react-loading-skeleton';

export const TeamItem = ({ team }) => (
  <li>
    {team.name || <Skeleton />}
  </li>
)

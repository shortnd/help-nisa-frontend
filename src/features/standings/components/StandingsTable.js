import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  border: 1px solid;
`;

const StandingsTable = ({ standings }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>P</th>
          <th></th>
          <th>Team</th>
          <th>GP</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>H (W-D-L)</th>
          <th>A (W-D-L)</th>
          <th>Latest</th>
          <th>GF</th>
          <th>GA</th>
          <th>GD</th>
          <th>PTS</th>
        </tr>
      </thead>
      <tbody>
        {standings.map((standing, index) => {
          return (
          <tr key={standing.id}>
            <td style={{
              textAlign: 'center'
            }}>{++index}</td>
            <td>{' '}</td>
            <td>
              <img src={standing.team.logo.url} alt={`${standing.team.name} logo`} />
              {standing.teamName}
            </td>
            <td style={{
              textAlign: 'center'
            }}>
              {standing.GP}
            </td>
            <td style={{
              textAlign: 'center'
            }}>
              {standing.W}
            </td>
            <td>
              {standing.D}
            </td>
            <td>
              {standing.L}
            </td>
            <td>
              {JSON.stringify(standing.HomeWTL)}
            </td>
            {/* {console.log(standing)} */}
          </tr>
          )})}
      </tbody>
    </StyledTable>
  )
}

export default StandingsTable;

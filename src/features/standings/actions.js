export const GET_STANDINGS = 'GET_STANDINGS';

export function getStandings() {
  return async function(dispatch) {
    const response = await fetch(`https://nisa-helper-server.herokuapp.com/standings?_sort=PT:DESC,W:DESC`)
    const json = await response.json();
    console.log(json)
    return dispatch({
      type: 'GET_STANDINGS',
      data: json
    });
  }
}

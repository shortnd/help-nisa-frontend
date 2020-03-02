import { GET_STANDINGS } from './actions'

const initialState = {
  standings: []
}

export default function (state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case GET_STANDINGS:
      return {
        ...state,
        standings: data
      }
    default:
      return state;
  }
}

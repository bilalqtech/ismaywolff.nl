import * as types from './actionTypes'

const initialState = {
  isFetching: false,
  items: {},
  result: []
}

export default function departments(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_WORKS:
      return {
        ...state,
        isFetching: true
      }
    case types.FETCH_WORKS_SUCCESS:
      return {
        isFetching: false,
        items: action.payload.entities.works,
        result: action.payload.result
      }
    case types.FETCH_WORKS_FAIL:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}

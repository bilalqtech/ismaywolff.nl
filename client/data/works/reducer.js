import * as types from './actionTypes'

const initialState = {
  errorMessage: '',
  hasError: false,
  isFetching: false,
  result: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_WORKS:
      return Object.assign({}, state, { isFetching: true })
    case types.FETCH_WORKS_SUCCESS:
      return {
        errorMessage: '',
        hasError: false,
        isFetching: false,
        result: action.payload.result
      }
    case types.FETCH_WORKS_FAIL:
      return Object.assign({}, state, {
        errorMessage: action.payload.message,
        hasError: true,
        isFetching: false
      })
    default:
      return state
  }
}

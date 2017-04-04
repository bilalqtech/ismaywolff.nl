import * as types from './actionTypes'

const initialState = {
  didFetch: false,
  errorMessage: '',
  hasError: false,
  isFetching: false,
  result: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ARTICLES:
      return Object.assign({}, state, { isFetching: true })
    case types.FETCH_ARTICLES_SUCCESS:
      return {
        didFetch: true,
        errorMessage: '',
        hasError: false,
        isFetching: false,
        result: action.payload.result
      }
    case types.FETCH_ARTICLES_FAIL:
      return Object.assign({}, state, {
        didFetch: true,
        errorMessage: action.payload.message,
        hasError: true,
        isFetching: false
      })
    default:
      return state
  }
}

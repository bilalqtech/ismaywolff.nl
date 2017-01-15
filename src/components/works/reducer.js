import * as types from './actionTypes'

const initialState = {
  errorMessage: '',
  hasError: false,
  isFetching: false,
  entities: {},
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
        errorMessage: '',
        hasError: false,
        isFetching: false,
        entities: action.payload.entities.works,
        result: action.payload.result
      }
    case types.FETCH_WORKS_FAIL:
      return {
        ...state,
        errorMessage: action.payload.message,
        hasError: true,
        isFetching: false
      }
    default:
      return state
  }
}

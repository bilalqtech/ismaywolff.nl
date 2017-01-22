import * as types from './actionTypes'

const initialState = {
  errorMessage: '',
  hasError: false,
  isFetching: false,
  result: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_IMAGES:
      return {
        ...state,
        isFetching: true
      }
    case types.FETCH_IMAGES_SUCCESS:
      return {
        errorMessage: '',
        hasError: false,
        isFetching: false,
        result: action.payload.result
      }
    case types.FETCH_IMAGES_FAIL:
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

import reducer from './reducer'
import * as types from './actionTypes'

describe('reducer', () => {
  const initialState = {
    didFetch: false,
    errorMessage: '',
    hasError: false,
    isFetching: false,
    result: []
  }

  const fetchingState = Object.assign({}, initialState, { isFetching: true })

  const payload = {
    result: 'result'
  }

  it('should return the initial state', () => {
    const actual = reducer(undefined, {})
    const expected = initialState

    expect(actual).toEqual(expected)
  })

  it('should handle FETCH_ARTICLES', () => {
    const actual = reducer(undefined, { type: types.FETCH_ARTICLES })
    const expected = fetchingState

    expect(actual).toEqual(expected)
  })

  it('should handle FETCH_ARTICLES_SUCCESS', () => {
    const actual = reducer(fetchingState, {
      type: types.FETCH_ARTICLES_SUCCESS,
      payload
    })
    const expected = {
      didFetch: true,
      errorMessage: '',
      hasError: false,
      isFetching: false,
      result: payload.result
    }

    expect(actual).toEqual(expected)
  })

  it('should handle FETCH_ARTICLES_FAIL', () => {
    const actual = reducer(fetchingState, {
      type: types.FETCH_ARTICLES_FAIL,
      payload: new Error('error')
    })
    const expected = {
      didFetch: true,
      errorMessage: 'error',
      hasError: true,
      isFetching: false,
      result: []
    }

    expect(actual).toEqual(expected)
  })
})

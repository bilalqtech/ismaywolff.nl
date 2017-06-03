import reducer from './reducer'
import * as types from './actionTypes'

describe('reducer', () => {
  const initialState = {
    didFetch: false,
    errorMessage: '',
    isFetching: false,
    result: []
  }
  const fetchingState = Object.assign({}, initialState, { isFetching: true })
  const payload = { result: 'result' }

  it('should return the initial state', () => {
    const actual = reducer(undefined, {})
    const expected = initialState

    expect(actual).toEqual(expected)
  })

  it('should handle FETCH_PAGES', () => {
    const actual = reducer(undefined, { type: types.FETCH_PAGES })
    const expected = fetchingState

    expect(actual).toEqual(expected)
  })

  it('should handle FETCH_PAGES_SUCCESS', () => {
    const actual = reducer(fetchingState, {
      type: types.FETCH_PAGES_SUCCESS,
      payload
    })
    const expected = {
      didFetch: true,
      errorMessage: '',
      isFetching: false,
      result: payload.result
    }

    expect(actual).toEqual(expected)
  })

  it('should handle FETCH_PAGES_FAIL with an errormessage', () => {
    const actual = reducer(fetchingState, {
      type: types.FETCH_PAGES_FAIL,
      payload: new Error('error')
    })
    const expected = {
      didFetch: true,
      errorMessage: 'error',
      isFetching: false,
      result: []
    }

    expect(actual).toEqual(expected)
  })

  it('should handle FETCH_PAGES_FAIL without an errormessage', () => {
    const actual = reducer(fetchingState, {
      type: types.FETCH_PAGES_FAIL,
      payload: {}
    })
    const expected = {
      didFetch: true,
      errorMessage: 'Something went wrong, but no errormessage was provided.',
      isFetching: false,
      result: []
    }

    expect(actual).toEqual(expected)
  })
})

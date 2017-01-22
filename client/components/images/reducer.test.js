import reducer from './reducer'
import * as types from './actionTypes'

describe('reducer', () => {
  const initialState = {
    errorMessage: '',
    hasError: false,
    isFetching: false,
    result: []
  }

  const fetchingState = {
    ...initialState,
    isFetching: true
  }

  const payload = {
    result: 'result'
  }

  it('should return the initial state', () => {
    const actual = reducer(undefined, {})
    const expected = initialState

    expect(actual).toEqual(expected)
  })

  it('should handle FETCH_IMAGES', () => {
    const actual = reducer(undefined, { type: types.FETCH_IMAGES })
    const expected = fetchingState

    expect(actual).toEqual(expected)
  })

  it('should handle FETCH_IMAGES_SUCCESS', () => {
    const actual = reducer(fetchingState, {
      type: types.FETCH_IMAGES_SUCCESS,
      payload
    })
    const expected = {
      errorMessage: '',
      hasError: false,
      isFetching: false,
      result: payload.result
    }

    expect(actual).toEqual(expected)
  })

  it('should handle FETCH_IMAGES_FAIL', () => {
    const actual = reducer(fetchingState, {
      type: types.FETCH_IMAGES_FAIL,
      payload: new Error('error')
    })
    const expected = {
      errorMessage: 'error',
      hasError: true,
      isFetching: false,
      result: []
    }

    expect(actual).toEqual(expected)
  })
})

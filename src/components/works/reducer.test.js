import reducer from './reducer'
import * as types from './actionTypes'

describe('departments reducer', () => {
  const initialState = {
    isFetching: false,
    items: {},
    result: []
  }

  const fetchingState = {
    isFetching: true,
    items: {},
    result: []
  }

  const payload = {
    entities: { works: 'entity' },
    result: 'result'
  }

  it('should return the initial state', () => {
    const actual = reducer(undefined, {})
    const expected = initialState

    expect(actual).toEqual(expected)
  })

  it('should handle FETCH_WORKS', () => {
    const actual = reducer(undefined, { type: types.FETCH_WORKS })
    const expected = {
      isFetching: true,
      items: {},
      result: []
    }

    expect(actual).toEqual(expected)
  })

  it('should handle FETCH_WORKS_SUCCESS', () => {
    const actual = reducer(fetchingState, {
      type: types.FETCH_WORKS_SUCCESS,
      payload
    })
    const expected = {
      isFetching: false,
      items: payload.entities.works,
      result: payload.result
    }

    expect(actual).toEqual(expected)
  })

  it('should handle FETCH_WORKS_FAIL', () => {
    const actual = reducer(fetchingState, {
      type: types.FETCH_WORKS_FAIL,
      payload: 'error'
    })
    const expected = {
      isFetching: false,
      items: {},
      result: []
    }

    expect(actual).toEqual(expected)
  })
})

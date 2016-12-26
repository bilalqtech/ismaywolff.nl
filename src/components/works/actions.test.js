import * as types from './actionTypes'
import * as actions from './actions'

describe('works actioncreators', () => {
  it('should create a FETCH_WORKS action', () => {
    const actual = actions.fetchWorks()
    const expected = {
      type: types.FETCH_WORKS
    }

    expect(actual).toEqual(expected)
  })

  it('should create a FETCH_WORKS_SUCCESS action', () => {
    const actual = actions.fetchWorksSuccess('payload')
    const expected = {
      type: types.FETCH_WORKS_SUCCESS,
      payload: 'payload'
    }

    expect(actual).toEqual(expected)
  })

  it('should create a FETCH_WORKS_FAIL action', () => {
    const actual = actions.fetchWorksFail('payload')
    const expected = {
      type: types.FETCH_WORKS_FAIL,
      payload: 'payload'
    }

    expect(actual).toEqual(expected)
  })
})

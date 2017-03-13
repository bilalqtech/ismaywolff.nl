import 'isomorphic-fetch'
import get from '../../services/get'
import * as types from './actionTypes'
import * as actions from './actions'

jest.mock('../../services/get', () => jest.fn())
jest.mock('./schemas')
jest.mock('../images/schemas')
jest.mock('../../data/links')
jest.mock('normalizr', () => ({
  normalize: items => items,
  schema: { Entity: jest.fn() }
}))

describe('fetchWorks', () => {
  it('should create FETCH_WORKS when fetching works starts', () => {
    const dispatch = jest.fn()

    get.mockImplementationOnce(() => Promise.resolve())

    return actions.fetchWorks()(dispatch)
      .then(() => expect(dispatch.mock.calls[0][0]).toEqual({ type: types.FETCH_WORKS }))
  })

  it('should create FETCH_WORKS_SUCCESS when fetching works has succeeded', () => {
    const dispatch = jest.fn()
    const body = JSON.stringify({ items: 'items' })
    const init = { status: 200, statusText: 'OK' }

    get.mockImplementationOnce(() => Promise.resolve(new Response(body, init)))

    return actions.fetchWorks()(dispatch)
      .then(() => expect(
        dispatch.mock.calls[1][0]).toEqual(actions.fetchWorksSuccess('items'))
      )
  })

  it('should create FETCH_WORKS_FAIL when fetching works has failed', () => {
    const dispatch = jest.fn()
    const error = new Error('Unauthorized')

    get.mockImplementationOnce(() => Promise.reject(error))

    return actions.fetchWorks()(dispatch)
      .then(() => expect(
        dispatch.mock.calls[1][0]).toEqual(actions.fetchWorksFail(error))
      )
  })
})

describe('fetchWorksSuccess', () => {
  it('should create a FETCH_WORKS_SUCCESS action', () => {
    const actual = actions.fetchWorksSuccess('payload')
    const expected = {
      type: types.FETCH_WORKS_SUCCESS,
      payload: 'payload'
    }

    expect(actual).toEqual(expected)
  })
})

describe('fetchWorksFail', () => {
  it('should create a FETCH_WORKS_FAIL action', () => {
    const actual = actions.fetchWorksFail('payload')
    const expected = {
      type: types.FETCH_WORKS_FAIL,
      payload: 'payload'
    }

    expect(actual).toEqual(expected)
  })
})

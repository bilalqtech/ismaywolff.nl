import 'isomorphic-fetch'
import get from '../../services/get'
import * as types from './actionTypes'
import * as actions from './actions'

jest.mock('../../services/get', () => jest.fn())
jest.mock('./schemas')
jest.mock('normalizr', () => ({
  normalize: items => items,
  schema: { Entity: jest.fn() }
}))

describe('fetchArticles', () => {
  it('should create FETCH_ARTICLES when fetching articles starts', () => {
    const dispatch = jest.fn()

    get.mockImplementationOnce(() => Promise.resolve())

    return actions.fetchArticles()(dispatch)
      .then(() => expect(dispatch.mock.calls[0][0]).toEqual({ type: types.FETCH_ARTICLES }))
  })

  it('should create FETCH_ARTICLES_SUCCESS when fetching articles has succeeded', () => {
    const dispatch = jest.fn()
    const body = JSON.stringify({ items: 'items' })
    const init = { status: 200, statusText: 'OK' }

    get.mockImplementationOnce(() => Promise.resolve(new Response(body, init)))

    return actions.fetchArticles()(dispatch)
      .then(() => expect(
        dispatch.mock.calls[1][0]).toEqual(actions.fetchArticlesSuccess('items'))
      )
  })

  it('should create FETCH_ARTICLES_FAIL when fetching articles has failed', () => {
    const dispatch = jest.fn()
    const error = new Error('Unauthorized')

    get.mockImplementationOnce(() => Promise.reject(error))

    return actions.fetchArticles()(dispatch)
      .then(() => expect(
        dispatch.mock.calls[1][0]).toEqual(actions.fetchArticlesFail(error))
      )
  })
})

describe('fetchArticlesSuccess', () => {
  it('should create a FETCH_ARTICLES_SUCCESS action', () => {
    const actual = actions.fetchArticlesSuccess('payload')
    const expected = {
      type: types.FETCH_ARTICLES_SUCCESS,
      payload: 'payload'
    }

    expect(actual).toEqual(expected)
  })
})

describe('fetchArticlesFail', () => {
  it('should create a FETCH_ARTICLES_FAIL action', () => {
    const actual = actions.fetchArticlesFail('payload')
    const expected = {
      type: types.FETCH_ARTICLES_FAIL,
      payload: 'payload'
    }

    expect(actual).toEqual(expected)
  })
})

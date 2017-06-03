import 'isomorphic-fetch'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import * as types from './actionTypes'
import * as actions from './actions'

/**
 * Mocks
 */

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const mockResponse = {
  items: [
    {
      fields: { slug: 'slug' },
      sys: { createdAt: 'createdAt' }
    }
  ]
}
const mockNormalized = {
  entities: {
    articles: {
      slug: {
        published: 'createdAt',
        slug: 'slug'
      }
    }
  },
  result: ['slug']
}

/**
 * Tests
 */

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

describe('fetchArticles', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('should handle succesful fetches', () => {
    nock(/contentful\.com/).get(/articles/).reply(200, mockResponse)

    const store = mockStore({})
    const expectedActions = [
      { type: types.FETCH_ARTICLES },
      { type: types.FETCH_ARTICLES_SUCCESS, payload: mockNormalized }
    ]

    return store
      .dispatch(actions.fetchArticles())
      .then(() => expect(store.getActions()).toEqual(expectedActions))
  })

  it('should handle unsuccesful fetches', () => {
    const error = new Error('Internal Server Error')
    nock(/contentful\.com/).get(/articles/).reply(500, error)

    const store = mockStore({})
    const expectedActions = [
      { type: types.FETCH_ARTICLES },
      { type: types.FETCH_ARTICLES_FAIL, payload: error }
    ]

    return store
      .dispatch(actions.fetchArticles())
      .then(() => expect(store.getActions()).toEqual(expectedActions))
  })
})

describe('fetchArticlesIfNeeded', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('should fetch articles if needed', () => {
    nock(/contentful\.com/).get(/articles/).reply(200, mockResponse)

    const store = mockStore({ articles: { isFetching: false, result: [] } })
    const expectedActions = [
      { type: types.FETCH_ARTICLES },
      { type: types.FETCH_ARTICLES_SUCCESS, payload: mockNormalized }
    ]

    return store
      .dispatch(actions.fetchArticlesIfNeeded())
      .then(() => expect(store.getActions()).toEqual(expectedActions))
  })

  it('should not fetch articles if already fetching', () => {
    const store = mockStore({ articles: { isFetching: true, result: [] } })

    return store
      .dispatch(actions.fetchArticlesIfNeeded())
      .then(() => expect(store.getActions()).toEqual([]))
  })

  it('should not fetch articles if there are already articles', () => {
    const store = mockStore({ articles: { isFetching: false, result: ['article'] } })

    return store
      .dispatch(actions.fetchArticlesIfNeeded())
      .then(() => expect(store.getActions()).toEqual([]))
  })
})

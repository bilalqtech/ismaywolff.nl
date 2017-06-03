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
      fields: { title: 'Slug', slug: 'slug', text: 'Text' }
    }
  ]
}
const mockNormalized = {
  entities: {
    pages: {
      slug: {
        title: 'Slug',
        slug: 'slug',
        text: 'Text'
      }
    }
  },
  result: ['slug']
}

/**
 * Tests
 */

describe('fetchPagesSuccess', () => {
  it('should create a FETCH_PAGES_SUCCESS action', () => {
    const actual = actions.fetchPagesSuccess('payload')
    const expected = {
      type: types.FETCH_PAGES_SUCCESS,
      payload: 'payload'
    }

    expect(actual).toEqual(expected)
  })
})

describe('fetchPagesFail', () => {
  it('should create a FETCH_PAGES_FAIL action', () => {
    const actual = actions.fetchPagesFail('payload')
    const expected = {
      type: types.FETCH_PAGES_FAIL,
      payload: 'payload'
    }

    expect(actual).toEqual(expected)
  })
})

describe('fetchPages', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('should handle succesful fetches', () => {
    nock(/contentful\.com/).get(/pages/).reply(200, mockResponse)

    const store = mockStore({})
    const expectedActions = [
      { type: types.FETCH_PAGES },
      { type: types.FETCH_PAGES_SUCCESS, payload: mockNormalized }
    ]

    return store
      .dispatch(actions.fetchPages())
      .then(() => expect(store.getActions()).toEqual(expectedActions))
  })

  it('should handle unsuccesful fetches', () => {
    const error = new Error('Internal Server Error')
    nock(/contentful\.com/).get(/pages/).reply(500, error)

    const store = mockStore({})
    const expectedActions = [
      { type: types.FETCH_PAGES },
      { type: types.FETCH_PAGES_FAIL, payload: error }
    ]

    return store
      .dispatch(actions.fetchPages())
      .then(() => expect(store.getActions()).toEqual(expectedActions))
  })
})

describe('fetchPagesIfNeeded', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('should fetch pages if needed', () => {
    nock(/contentful\.com/).get(/pages/).reply(200, mockResponse)

    const store = mockStore({ pages: { isFetching: false, result: [] } })
    const expectedActions = [
      { type: types.FETCH_PAGES },
      { type: types.FETCH_PAGES_SUCCESS, payload: mockNormalized }
    ]

    return store
      .dispatch(actions.fetchPagesIfNeeded())
      .then(() => expect(store.getActions()).toEqual(expectedActions))
  })

  it('should not fetch pages if already fetching', () => {
    const store = mockStore({ pages: { isFetching: true, result: [] } })

    return store
      .dispatch(actions.fetchPagesIfNeeded())
      .then(() => expect(store.getActions()).toEqual([]))
  })

  it('should not fetch pages if there are already pages', () => {
    const store = mockStore({ pages: { isFetching: false, result: ['page'] } })

    return store
      .dispatch(actions.fetchPagesIfNeeded())
      .then(() => expect(store.getActions()).toEqual([]))
  })
})

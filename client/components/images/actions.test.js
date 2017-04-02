import 'isomorphic-fetch'
import get from '../../services/get'
import * as types from './actionTypes'
import * as actions from './actions'

jest.mock('../../services/get', () => jest.fn())
jest.mock('./schemas')
jest.mock('../../data/works')
jest.mock('../../data/links')
jest.mock('normalizr', () => ({
  normalize: items => items,
  schema: { Entity: jest.fn() }
}))

describe('fetchImages', () => {
  it('should create FETCH_IMAGES when fetching images starts', () => {
    const dispatch = jest.fn()

    get.mockImplementationOnce(() => Promise.resolve())

    return actions.fetchImages()(dispatch)
      .then(() => expect(dispatch.mock.calls[0][0]).toEqual({ type: types.FETCH_IMAGES }))
  })

  it('should create FETCH_IMAGES_SUCCESS when fetching images has succeeded', () => {
    const dispatch = jest.fn()
    const body = JSON.stringify({ items: 'items' })
    const init = { status: 200, statusText: 'OK' }

    get.mockImplementationOnce(() => Promise.resolve(new Response(body, init)))

    return actions.fetchImages()(dispatch)
      .then(() => expect(
        dispatch.mock.calls[1][0]).toEqual(actions.fetchImagesSuccess('items'))
      )
  })

  it('should create FETCH_IMAGES_FAIL when fetching images has failed', () => {
    const dispatch = jest.fn()
    const error = new Error('Unauthorized')

    get.mockImplementationOnce(() => Promise.reject(error))

    return actions.fetchImages()(dispatch)
      .then(() => expect(
        dispatch.mock.calls[1][0]).toEqual(actions.fetchImagesFail(error))
      )
  })
})

describe('fetchImagesSuccess', () => {
  it('should create a FETCH_IMAGES_SUCCESS action', () => {
    const actual = actions.fetchImagesSuccess('payload')
    const expected = {
      type: types.FETCH_IMAGES_SUCCESS,
      payload: 'payload'
    }

    expect(actual).toEqual(expected)
  })
})

describe('fetchImagesFail', () => {
  it('should create a FETCH_IMAGES_FAIL action', () => {
    const actual = actions.fetchImagesFail('payload')
    const expected = {
      type: types.FETCH_IMAGES_FAIL,
      payload: 'payload'
    }

    expect(actual).toEqual(expected)
  })
})

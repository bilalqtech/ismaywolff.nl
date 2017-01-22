import * as types from './actionTypes'
import * as actions from './actions'

describe('actioncreators', () => {
  it('should create a FETCH_IMAGES action', () => {
    const actual = actions.fetchImages()
    const expected = {
      type: types.FETCH_IMAGES
    }

    expect(actual).toEqual(expected)
  })

  it('should create a FETCH_IMAGES_SUCCESS action', () => {
    const actual = actions.fetchImagesSuccess('payload')
    const expected = {
      type: types.FETCH_IMAGES_SUCCESS,
      payload: 'payload'
    }

    expect(actual).toEqual(expected)
  })

  it('should create a FETCH_IMAGES_FAIL action', () => {
    const actual = actions.fetchImagesFail('payload')
    const expected = {
      type: types.FETCH_IMAGES_FAIL,
      payload: 'payload'
    }

    expect(actual).toEqual(expected)
  })
})

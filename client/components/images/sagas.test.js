import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { normalize } from 'normalizr'
import * as actions from './actions'
import * as sagas from './sagas'
import * as schemas from './schemas'
import * as types from './actionTypes'
import get from '../../services/get'
import { endpoints } from '../../services/endpoints'

describe('sagas', () => {
  describe('watchFetchImages', () => {
    it('should respond to FETCH_IMAGES', () => {
      const generator = sagas.watchFetchImages()
      const actual = generator.next().value
      const expected = call(takeLatest, types.FETCH_IMAGES, sagas.fetchImages)

      expect(actual).toEqual(expected)
    })
  })

  describe('fetchImages', () => {
    it('should fetch data', () => {
      const generator = sagas.fetchImages()
      const actual = generator.next().value
      const expected = call(get, endpoints.IMAGES_ENDPOINT)

      expect(actual).toEqual(expected)
    })

    it('should call normalizr on data', () => {
      const data = { items: 'items' }
      const generator = sagas.fetchImages()
      const expected = call(normalize, data.items, [schemas.images])

      generator.next()
      const actual = generator.next({ data }).value

      expect(actual).toEqual(expected)
    })

    it('should put fetchImagesSuccess on data', () => {
      const normalized = 'normalized'
      const generator = sagas.fetchImages()
      const expected = put(actions.fetchImagesSuccess(normalized))

      generator.next()
      generator.next({ data: 'data' })
      const actual = generator.next(normalized).value

      expect(actual).toEqual(expected)
    })

    it('should put fetchImagesFail on errors', () => {
      const error = {}
      const generator = sagas.fetchImages()
      const expected = put(actions.fetchImagesFail(error))

      generator.next()
      const actual = generator.next({ error }).value

      expect(actual).toEqual(expected)
    })
  })
})

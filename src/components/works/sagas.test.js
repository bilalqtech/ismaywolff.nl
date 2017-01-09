import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { normalize, arrayOf } from 'normalizr'
import * as actions from './actions'
import * as sagas from './sagas'
import * as schemas from './schemas'
import * as types from './actionTypes'
import Api, { constants } from '../../services/api'

describe('works sagas', () => {
  describe('watchFetchWorks', () => {
    it('should respond to FETCH_WORKS', () => {
      const generator = sagas.watchFetchWorks()
      const actual = generator.next().value
      const expected = call(takeLatest, types.FETCH_WORKS, sagas.fetchWorks)

      expect(actual).toEqual(expected)
    })
  })

  describe('fetchWorks', () => {
    it('should fetch data', () => {
      const generator = sagas.fetchWorks()
      const actual = generator.next().value
      const expected = call(Api.get, constants.WORKS_ENDPOINT)

      expect(actual).toEqual(expected)
    })

    it('should call normalizr on data', () => {
      const data = { items: 'items' }
      const generator = sagas.fetchWorks()
      const expected = call(normalize, data.items, arrayOf(schemas.works))

      generator.next()
      const actual = generator.next({ data }).value

      expect(actual).toEqual(expected)
    })

    it('should put fetchWorksSuccess on data', () => {
      const normalized = 'normalized'
      const generator = sagas.fetchWorks()
      const expected = put(actions.fetchWorksSuccess(normalized))

      generator.next()
      generator.next({ data: 'data' })
      const actual = generator.next(normalized).value

      expect(actual).toEqual(expected)
    })

    it('should put fetchWorksFail on errors', () => {
      const error = {}
      const generator = sagas.fetchWorks()
      const expected = put(actions.fetchWorksFail(error))

      generator.next()
      const actual = generator.next({ error }).value

      expect(actual).toEqual(expected)
    })
  })
})

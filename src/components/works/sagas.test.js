import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import * as sagas from './sagas'
import * as actions from './actions'
import * as types from './actionTypes'

import { api, constants as apiConstants } from '../../services/api'

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
      const expected = call(api.getJson, apiConstants.WORKS_ENDPOINT)

      expect(actual).toEqual(expected)
    })

    it('should put fetchWorksSuccess on a response', () => {
      const response = {
        items: [{ sys: { id: 1 } }]
      }
      const normalized = {
        entities: {
          works: { 1: response.items[0] }
        },
        result: [1]
      }
      const generator = sagas.fetchWorks()
      const expected = put(actions.fetchWorksSuccess(normalized))

      generator.next()
      const actual = generator.next({ response }).value

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

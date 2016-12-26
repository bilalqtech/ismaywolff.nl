import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { normalize, arrayOf } from 'normalizr'

import * as actions from './actions'
import * as schemas from './schemas'
import * as types from './actionTypes'

import { api, constants as apiConstants } from '../../services/api'

export function* fetchWorks() {
  const { response, error } = yield call(api.getJson, apiConstants.WORKS_ENDPOINT)
  if (response) {
    const normalized = normalize(response.items, arrayOf(schemas.works))
    yield put(actions.fetchWorksSuccess(normalized))
  } else {
    yield put(actions.fetchWorksFail(error))
  }
}

export function* watchFetchWorks() {
  yield call(takeLatest, types.FETCH_WORKS, fetchWorks)
}

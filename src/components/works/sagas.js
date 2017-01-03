import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { normalize, arrayOf } from 'normalizr'
import * as actions from './actions'
import * as schemas from './schemas'
import * as types from './actionTypes'
import Api, { constants } from '../../services/api'

export function* fetchWorks() {
  const { response, error } = yield call(Api.get, constants.WORKS_ENDPOINT)
  if (response) {
    const normalized = yield call(normalize, response.items, arrayOf(schemas.works))
    yield put(actions.fetchWorksSuccess(normalized))
  } else {
    yield put(actions.fetchWorksFail(error))
  }
}

export function* watchFetchWorks() {
  yield call(takeLatest, types.FETCH_WORKS, fetchWorks)
}

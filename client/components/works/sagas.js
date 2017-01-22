import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { normalize } from 'normalizr'
import * as actions from './actions'
import * as schemas from './schemas'
import * as types from './actionTypes'
import get from '../../services/get'
import { endpoints } from '../../services/endpoints'

export function* fetchWorks() {
  const { data, error } = yield call(get, endpoints.WORKS_ENDPOINT)
  if (data) {
    const normalized = yield call(normalize, data.items, [schemas.works])
    yield put(actions.fetchWorksSuccess(normalized))
  } else {
    yield put(actions.fetchWorksFail(error))
  }
}

export function* watchFetchWorks() {
  yield call(takeLatest, types.FETCH_WORKS, fetchWorks)
}

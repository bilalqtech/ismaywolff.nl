import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { normalize } from 'normalizr'
import * as actions from './actions'
import * as schemas from './schemas'
import * as types from './actionTypes'
import Api, { constants } from '../../services/api'

export function* fetchWorks() {
  const { data, error } = yield call(Api.get, constants.WORKS_ENDPOINT)
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

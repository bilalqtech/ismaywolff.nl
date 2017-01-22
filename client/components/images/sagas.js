import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { normalize } from 'normalizr'
import * as actions from './actions'
import * as schemas from './schemas'
import * as types from './actionTypes'
import get from '../../services/get'
import { endpoints } from '../../services/endpoints'

export function* fetchImages() {
  const { data, error } = yield call(get, endpoints.IMAGES_ENDPOINT)
  if (data) {
    const normalized = yield call(normalize, data.items, [schemas.images])
    yield put(actions.fetchImagesSuccess(normalized))
  } else {
    yield put(actions.fetchImagesFail(error))
  }
}

export function* watchFetchImages() {
  yield call(takeLatest, types.FETCH_IMAGES, fetchImages)
}

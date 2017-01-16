import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { normalize } from 'normalizr'
import * as actions from './actions'
import * as schemas from './schemas'
import * as types from './actionTypes'
import Api, { constants } from '../../services/api'

export function* fetchImages() {
  const { data, error } = yield call(Api.get, constants.IMAGES_ENDPOINT)
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

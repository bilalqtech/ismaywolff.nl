import { normalize } from 'normalizr'
import get from '../../services/get'
import { endpoints } from '../../services/endpoints'
import * as types from './actionTypes'
import * as schemas from './schemas'
import * as selectors from './selectors'

/**
 * Checks whether images should be fetched based on the current state
 */

const shouldFetchImages = state => {
  const hasImages = selectors.checkHasImages(state)
  const imageState = selectors.getImageState(state)

  if (imageState.isFetching) {
    return false
  } else if (!hasImages) {
    return true
  }

  return false
}

/**
 * Action creators
 */

export const fetchImagesSuccess = payload => ({
  type: types.FETCH_IMAGES_SUCCESS,
  payload
})

export const fetchImagesFail = payload => ({
  type: types.FETCH_IMAGES_FAIL,
  payload
})

export const fetchImages = () => dispatch => {
  dispatch({ type: types.FETCH_IMAGES })

  return get(endpoints.IMAGES)
    .then(response => response.json())
    .then(data => normalize(data.items, [schemas.images]))
    .then(normalized => dispatch(fetchImagesSuccess(normalized)))
    .catch(error => dispatch(fetchImagesFail(error)))
}

export const fetchImagesIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchImages(getState())) {
    return dispatch(fetchImages())
  }

  return Promise.resolve()
}

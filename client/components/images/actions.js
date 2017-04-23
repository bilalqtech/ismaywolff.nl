import { normalize } from 'normalizr'
import get from '../../services/get'
import { endpoints } from '../../services/endpoints'
import * as types from './actionTypes'
import * as schemas from './schemas'

export const fetchImagesSuccess = payload => ({
  type: types.FETCH_IMAGES_SUCCESS,
  payload
})

export const fetchImagesFail = payload => ({
  type: types.FETCH_IMAGES_FAIL,
  payload
})

export const fetchImages = () => dispatch => {
  // indicate start of fetch
  dispatch({ type: types.FETCH_IMAGES })

  // fetch images
  return get(endpoints.IMAGES)
    .then(response => response.json())
    .then(data => normalize(data.items, [schemas.images]))
    .then(normalized => dispatch(fetchImagesSuccess(normalized)))
    .catch(error => dispatch(fetchImagesFail(error)))
}

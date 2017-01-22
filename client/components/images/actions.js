import * as types from './actionTypes'

export const fetchImages = () => ({
  type: types.FETCH_IMAGES
})

export const fetchImagesSuccess = payload => ({
  type: types.FETCH_IMAGES_SUCCESS,
  payload
})

export const fetchImagesFail = payload => ({
  type: types.FETCH_IMAGES_FAIL,
  payload
})

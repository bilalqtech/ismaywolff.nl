import { normalize } from 'normalizr'
import get from '../../services/get'
import { endpoints } from '../../services/endpoints'
import * as types from './actionTypes'
import * as schemas from './schemas'
import * as selectors from './selectors'

export const fetchPagesSuccess = payload => ({
  type: types.FETCH_PAGES_SUCCESS,
  payload
})

export const fetchPagesFail = payload => ({
  type: types.FETCH_PAGES_FAIL,
  payload
})

export const fetchPages = () => dispatch => {
  dispatch({ type: types.FETCH_PAGES })

  return get(endpoints.PAGES)
    .then(response => response.json())
    .then(data => normalize(data.items, [schemas.pages]))
    .then(normalized => dispatch(fetchPagesSuccess(normalized)))
    .catch(error => dispatch(fetchPagesFail(error)))
}

export const fetchPagesIfNeeded = () => (dispatch, getState) => {
  if (selectors.shouldFetchPages(getState())) {
    return dispatch(fetchPages())
  }

  return Promise.resolve()
}

import { normalize } from 'normalizr'
import get from '../../services/get'
import { endpoints } from '../../services/endpoints'
import * as types from './actionTypes'
import * as schemas from './schemas'
import * as selectors from './selectors'

/**
 * Checks whether works should be fetched based on the current state
 */

const shouldFetchWorks = state => {
  const hasWorks = selectors.checkHasWorks(state)
  const workState = selectors.getWorkState(state)

  if (workState.isFetching) {
    return false
  } else if (!hasWorks) {
    return true
  }

  return false
}

/**
 * Action creators
 */

export const fetchWorksSuccess = payload => ({
  type: types.FETCH_WORKS_SUCCESS,
  payload
})

export const fetchWorksFail = payload => ({
  type: types.FETCH_WORKS_FAIL,
  payload
})

export const fetchWorks = () => dispatch => {
  dispatch({ type: types.FETCH_WORKS })

  return get(endpoints.WORKS)
    .then(response => response.json())
    .then(data => normalize(data.items, [schemas.works]))
    .then(normalized => dispatch(fetchWorksSuccess(normalized)))
    .catch(error => dispatch(fetchWorksFail(error)))
}

export const fetchWorksIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchWorks(getState())) {
    return dispatch(fetchWorks())
  }

  return Promise.resolve()
}

import { normalize } from 'normalizr'
import get from '../../services/get'
import { endpoints } from '../../services/endpoints'
import * as types from './actionTypes'
import * as schemas from './schemas'
import * as selectors from './selectors'

export const fetchArticlesSuccess = payload => ({
  type: types.FETCH_ARTICLES_SUCCESS,
  payload
})

export const fetchArticlesFail = payload => ({
  type: types.FETCH_ARTICLES_FAIL,
  payload
})

export const fetchArticles = () => dispatch => {
  dispatch({ type: types.FETCH_ARTICLES })

  return get(endpoints.ARTICLES)
    .then(response => response.json())
    .then(data => normalize(data.items, [schemas.articles]))
    .then(normalized => dispatch(fetchArticlesSuccess(normalized)))
    .catch(error => dispatch(fetchArticlesFail(error)))
}

export const fetchArticlesIfNeeded = () => (dispatch, getState) => {
  if (selectors.shouldFetchArticles(getState())) {
    return dispatch(fetchArticles())
  }

  return Promise.resolve()
}

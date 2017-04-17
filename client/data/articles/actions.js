import { normalize } from 'normalizr'
import * as types from './actionTypes'
import * as schemas from './schemas'
import get from '../../services/get'
import { endpoints } from '../../services/endpoints'

export const fetchArticlesSuccess = payload => ({
  type: types.FETCH_ARTICLES_SUCCESS,
  payload
})

export const fetchArticlesFail = payload => ({
  type: types.FETCH_ARTICLES_FAIL,
  payload
})

export const fetchArticles = () => (
  dispatch => {
    // indicate start of fetch
    dispatch({ type: types.FETCH_ARTICLES })

    // fetch articles
    return get(endpoints.ARTICLES)
      .then(response => response.json())
      .then(data => normalize(data.items, [schemas.articles]))
      .then(normalized => dispatch(fetchArticlesSuccess(normalized)))
      .catch(error => dispatch(fetchArticlesFail(error)))
  }
)

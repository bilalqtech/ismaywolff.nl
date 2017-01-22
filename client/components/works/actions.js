import * as types from './actionTypes'

export const fetchWorks = () => ({
  type: types.FETCH_WORKS
})

export const fetchWorksSuccess = payload => ({
  type: types.FETCH_WORKS_SUCCESS,
  payload
})

export const fetchWorksFail = payload => ({
  type: types.FETCH_WORKS_FAIL,
  payload
})

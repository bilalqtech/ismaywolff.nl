import { combineReducers } from 'redux'
import entities from './data/entities'
import images from './components/images'
import works from './components/works'

export default combineReducers({
  entities,
  images,
  works
})

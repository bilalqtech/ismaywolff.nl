import { combineReducers } from 'redux'
import works from './components/works'
import images from './components/images'
import entities from './data/entities'

export default combineReducers({
  entities,
  images,
  works
})

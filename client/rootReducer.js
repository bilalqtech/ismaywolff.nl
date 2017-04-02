import { combineReducers } from 'redux'
import entities from './data/entities'
import images from './components/images'
import works from './data/works'

export default combineReducers({
  entities,
  images,
  works
})

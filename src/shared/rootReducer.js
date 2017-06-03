import { combineReducers } from 'redux'
import articles from './data/articles'
import entities from './data/entities'
import images from './components/images'
import pages from './data/pages'
import works from './data/works'

export default combineReducers({
  articles,
  entities,
  images,
  pages,
  works
})

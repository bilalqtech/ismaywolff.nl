import { combineReducers } from 'redux'
import works, { constants as WORKS } from './components/works'

export default combineReducers({
  [WORKS.NAME]: works
})

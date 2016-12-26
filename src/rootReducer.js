import { combineReducers } from 'redux'
import { constants as WORKS, reducer as works } from './components/works'

export default combineReducers({
  [WORKS.NAME]: works
})

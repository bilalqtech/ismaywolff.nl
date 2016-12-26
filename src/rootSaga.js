import { sagas as works } from './components/works'

const rootSaga = function* () {
  yield [
    works.watchFetchWorks()
  ]
}

export default rootSaga

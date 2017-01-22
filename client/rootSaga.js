import { sagas as works } from './components/works'
import { sagas as images } from './components/images'

const rootSaga = function* () {
  yield [
    images.watchFetchImages(),
    works.watchFetchWorks()
  ]
}

export default rootSaga

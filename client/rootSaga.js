import { sagas as images } from './components/images'
import { sagas as works } from './components/works'

const rootSaga = function* () {
  yield [
    images.watchFetchImages(),
    works.watchFetchWorks()
  ]
}

export default rootSaga

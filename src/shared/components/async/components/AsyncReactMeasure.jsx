import Loadable from 'react-loadable'
import AsyncLoader from './AsyncLoader'

/* istanbul ignore next: dynamic import won't be executed when testing */
const AsyncReactMeasure = Loadable({
  loader: () => import('react-measure'),
  LoadingComponent: AsyncLoader,
  serverSideRequirePath: 'react-measure'
})

export default AsyncReactMeasure

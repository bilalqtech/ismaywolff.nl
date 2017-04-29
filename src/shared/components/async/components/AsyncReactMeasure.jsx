import Loadable from 'react-loadable'
import AsyncLoader from './AsyncLoader'

const AsyncReactMeasure = Loadable({
  loader: () => import('react-measure'),
  LoadingComponent: AsyncLoader,
  serverSideRequirePath: 'react-measure'
})

export default AsyncReactMeasure

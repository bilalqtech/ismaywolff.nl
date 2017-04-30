import Loadable from 'react-loadable'
import AsyncLoader from './AsyncLoader'

/* istanbul ignore next: dynamic import won't be executed when testing */
const AsyncReactMarkdown = Loadable({
  loader: () => import('react-markdown'),
  LoadingComponent: AsyncLoader,
  serverSideRequirePath: 'react-markdown'
})

export default AsyncReactMarkdown

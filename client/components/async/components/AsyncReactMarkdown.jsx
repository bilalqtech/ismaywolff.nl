import Loadable from 'react-loadable'
import AsyncLoader from './AsyncLoader'

const AsyncReactMarkdown = Loadable({
  loader: () => import('react-markdown'),
  LoadingComponent: AsyncLoader
})

export default AsyncReactMarkdown

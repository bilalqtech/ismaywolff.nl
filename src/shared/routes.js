import About from './scenes/About'
import Work from './scenes/Work'
import WorkDetail from './scenes/WorkDetail'
import Writing from './scenes/Writing'
import WritingDetail from './scenes/WritingDetail'
import Missing from './scenes/Missing'

const routes = [
  {
    path: '/',
    component: About,
    exact: true
  },
  {
    path: '/work',
    component: Work,
    exact: true
  },
  {
    path: '/work/:id',
    component: WorkDetail
  },
  {
    path: '/writing',
    component: Writing,
    exact: true
  },
  {
    path: '/writing/:id',
    component: WritingDetail
  },
  {
    component: Missing
  }
]

export default routes

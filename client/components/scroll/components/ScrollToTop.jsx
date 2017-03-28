import { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'

/**
 * Scrolls window to top on navigation for clients that don't
 * yet support scroll restoration. This component can be removed
 * when enough clients support it.
 */

export class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    const hasScrollRestoration = window.history.scrollRestoration

    if (!hasScrollRestoration && this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return null
  }
}

ScrollToTop.propTypes = {
  location: PropTypes.object.isRequired
}

export default withRouter(ScrollToTop)

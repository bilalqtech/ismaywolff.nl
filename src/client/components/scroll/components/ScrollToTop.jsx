import { Component } from 'react'
import { shape, string } from 'prop-types'
import { withRouter } from 'react-router'

/**
 * Scrolls window to top on navigation
 */

export class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return null
  }
}

ScrollToTop.propTypes = {
  location: shape({
    pathname: string.isRequired
  }).isRequired
}

export default withRouter(ScrollToTop)

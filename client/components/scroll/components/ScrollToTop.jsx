import { Component } from 'react'
import { object } from 'prop-types'
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
  location: object.isRequired
}

export default withRouter(ScrollToTop)

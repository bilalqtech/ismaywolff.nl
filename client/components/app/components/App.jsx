import React, { Component, PropTypes } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import Routes from './Routes'
import { actions as works } from '../../works'
import { actions as images } from '../../images'

export class App extends Component {
  componentDidMount() {
    this.props.fetchWorks()
    this.props.fetchImages()
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    )
  }
}

App.propTypes = {
  fetchImages: PropTypes.func.isRequired,
  fetchWorks: PropTypes.func.isRequired,
  store: PropTypes.shape({
    getState: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    subscribe: PropTypes.func.isRequired,
    replaceReducer: PropTypes.func.isRequired
  }).isRequired
}

const actions = {
  fetchWorks: works.fetchWorks,
  fetchImages: images.fetchImages
}

export default connect(null, actions)(App)

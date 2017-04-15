import React, { Component } from 'react'
import { func, object } from 'prop-types'
import { Router } from 'react-router'
import { Provider, connect } from 'react-redux'
import Routes from './Routes'
import { ScrollToTop } from '../../scroll'
import { actions as works } from '../../../data/works'
import { actions as articles } from '../../../data/articles'
import { actions as images } from '../../images'

export class App extends Component {
  componentDidMount() {
    this.props.fetchWorks()
    this.props.fetchImages()
    this.props.fetchArticles()
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={this.props.history}>
          <div>
            <ScrollToTop />
            <Routes />
          </div>
        </Router>
      </Provider>
    )
  }
}

App.propTypes = {
  fetchImages: func.isRequired,
  fetchWorks: func.isRequired,
  fetchArticles: func.isRequired,
  store: object.isRequired,
  history: object.isRequired
}

const actions = {
  fetchWorks: works.fetchWorks,
  fetchArticles: articles.fetchArticles,
  fetchImages: images.fetchImages
}

export default connect(null, actions)(App)

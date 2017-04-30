import React, { Component } from 'react'
import { object, bool, func } from 'prop-types'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { selectors, actions as workActions } from '../../data/works'
import { actions as imageActions } from '../../components/images'
import { Spinner } from '../../components/spinner'
import { AppError, MissingPageError } from '../../components/errors'
import WorkDetailBody from './components/WorkDetailBody'

export class DumbWorkDetail extends Component {
  static needs() {
    return [workActions.fetchWorksIfNeeded(), imageActions.fetchImagesIfNeeded()]
  }

  componentDidMount() {
    this.props.fetchWorksIfNeeded()
    this.props.fetchImagesIfNeeded()
  }

  render() {
    const { entities, works, hasWorks, match } = this.props
    const requestedWork = entities[match.params.id]

    // If fetching or hasn't fetched yet
    if (works.isFetching || !works.didFetch) {
      return <Spinner />
    }

    // If there's an error
    if (works.errorMessage) {
      return <AppError errorMessage={works.errorMessage} />
    }

    // If there's work but not the requested one
    if (hasWorks && !requestedWork) {
      return <MissingPageError />
    }

    return (
      <div>
        <div>
          <Helmet>
            <title>{`${requestedWork.title} • Ismay Wolff`}</title>
            <meta name="description" content={`Detailed view of ${requestedWork.title}`} />
          </Helmet>
          <WorkDetailBody work={requestedWork} />
        </div>
      </div>
    )
  }
}

DumbWorkDetail.propTypes = {
  fetchImagesIfNeeded: func.isRequired,
  fetchWorksIfNeeded: func.isRequired,
  entities: object.isRequired,
  hasWorks: bool.isRequired,
  match: object.isRequired,
  works: object.isRequired
}

const mapStateToProps = state => ({
  entities: selectors.getWorkEntities(state),
  hasWorks: selectors.checkHasWorks(state),
  works: selectors.getWorkState(state)
})

const actions = {
  fetchWorksIfNeeded: workActions.fetchWorksIfNeeded,
  fetchImagesIfNeeded: imageActions.fetchImagesIfNeeded
}

export default connect(mapStateToProps, actions)(DumbWorkDetail)

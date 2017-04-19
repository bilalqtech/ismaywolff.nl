import React from 'react'
import { object } from 'prop-types'
import { connect } from 'react-redux'
import dateformat from 'dateformat'
import { gutter } from '../../../styles'
import { selectors } from '../../../data/articles'
import { Cell, Grid } from '../../../components/grid'
import { InternalLink } from '../../../components/links'
import { Spinner } from '../../../components/spinner'
import { AppError } from '../../../components/errors'
import { TextLine, TextLineFill, TextLineFit } from '../../../components/text'

export function DumbWritingBody({ entities, articles }) {
  // if fetching or hasn't fetched yet
  if (articles.isFetching || !articles.didFetch) {
    return <Spinner />
  }

  // if there's an error
  if (articles.errorMessage) {
    return <AppError errorMessage={articles.errorMessage} />
  }

  return (
    <Grid gutter={gutter}>
      {articles.result.map(id => (
        <Cell
          gutter={gutter}
          key={id}
        >
          <InternalLink to={`/writing/${entities[id].slug}`}>
            <TextLine>
              <TextLineFill direction={'right'}>{entities[id].title}</TextLineFill>
              <TextLineFit>{dateformat(entities[id].published, 'mmmm yyyy')}</TextLineFit>
            </TextLine>
          </InternalLink>
        </Cell>
      ))}
    </Grid>
  )
}

DumbWritingBody.propTypes = {
  entities: object.isRequired,
  articles: object.isRequired
}

const mapStateToProps = state => ({
  entities: selectors.getArticleEntities(state),
  articles: selectors.getArticleState(state)
})

export default connect(mapStateToProps)(DumbWritingBody)

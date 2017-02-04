import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import styled from 'styled-components'
import { About } from '../../about'
import { Header } from '../../header'
import { Missing } from '../../missing'
import { WorkDetailContainer, WorkListContainer } from '../../works'

const Container = styled.div`
  margin: 0 auto;
  max-width: 40rem;
`

function Routes() {
  return (
    <DocumentTitle title="Ismay Wolff">
      <Container>
        <Header />
        <Switch>
          <Route path="/" exact component={WorkListContainer} />
          <Route path="/work/:id" component={WorkDetailContainer} />
          <Route path="/about" component={About} />
          <Route component={Missing} />
        </Switch>
      </Container>
    </DocumentTitle>
  )
}

export default Routes

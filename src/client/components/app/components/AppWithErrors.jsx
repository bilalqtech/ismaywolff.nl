import React from 'react'
import { instanceOf } from 'prop-types'
import { Container } from '../../../../shared/components/container'
import { BootError } from '../../../../shared/components/errors'

function AppWithErrors({ error }) {
  return (
    <Container>
      <BootError errorMessage={error.message} />
    </Container>
  )
}

AppWithErrors.propTypes = {
  error: instanceOf(Error).isRequired
}

export default AppWithErrors

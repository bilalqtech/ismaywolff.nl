import React from 'react'
import { string } from 'prop-types'
import { Container } from '../../../../shared/components/container'
import { BootError } from '../../../../shared/components/errors'

const AppWithErrors = ({ errorMessage }) => (
  <Container>
    <BootError errorMessage={errorMessage} />
  </Container>
)

AppWithErrors.propTypes = {
  errorMessage: string.isRequired
}

export default AppWithErrors

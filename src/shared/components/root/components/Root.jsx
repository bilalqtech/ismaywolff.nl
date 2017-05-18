import React from 'react'
import { injectGlobal } from 'styled-components'
import { normalize } from 'polished'
import { Routes } from '../../routes'
import { Header } from '../../header'
import { Container } from '../../container'
import styles from '../styles'
import fonts from '../fonts'

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  ${fonts}
  ${normalize()}
  ${styles}
`

function Root() {
  return (
    <Container>
      <Header />
      <Routes />
    </Container>
  )
}

export default Root

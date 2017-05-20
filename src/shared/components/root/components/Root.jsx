import React from 'react'
import { Routes } from '../../routes'
import { Header } from '../../header'
import { Container } from '../../container'

function Root() {
  return (
    <Container>
      <Header />
      <Routes />
    </Container>
  )
}

export default Root

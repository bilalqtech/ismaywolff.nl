import React from 'react'
import { number, node } from 'prop-types'
import { Route } from 'react-router-dom'

function Status({ code, children }) {
  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) {
          // eslint-disable-next-line no-param-reassign
          staticContext.status = code
        }
        return children
      }}
    />
  )
}

Status.propTypes = {
  code: number.isRequired,
  children: node
}

Status.defaultProps = {
  children: null
}

export default Status

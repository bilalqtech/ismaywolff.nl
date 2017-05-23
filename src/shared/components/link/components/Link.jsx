/* eslint-disable react/no-unused-prop-types, react/require-default-props */

import React from 'react'
import { string } from 'prop-types'
import Internal from './Internal'
import External from './External'

function Link(props) {
  if (props.to) {
    return <Internal {...props} />
  }

  return <External {...props} />
}

Link.propTypes = {
  href: string,
  to: string
}

export default Link

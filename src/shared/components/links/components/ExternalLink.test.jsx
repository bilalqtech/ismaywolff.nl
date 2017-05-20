/**
 * @jest-environment node
 */

import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import ExternalLink from './ExternalLink'

describe('<ExternalLink />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ExternalLink href={'url'} />)
    expect(wrapper).toMatchStyledComponentsSnapshot()
  })
})

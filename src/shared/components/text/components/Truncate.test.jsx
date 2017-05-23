/**
 * @jest-environment node
 */

import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import Truncate from './Truncate'

describe('<Truncate />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Truncate />)
    expect(wrapper).toMatchStyledComponentsSnapshot()
  })
})

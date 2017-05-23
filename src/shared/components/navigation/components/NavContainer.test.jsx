/**
 * @jest-environment node
 */

import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import NavContainer from './NavContainer'

describe('<NavContainer />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<NavContainer />)
    expect(wrapper).toMatchStyledComponentsSnapshot()
  })
})

/**
 * @jest-environment node
 */

import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import SubTitle from './SubTitle'

describe('<SubTitle />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SubTitle />)
    expect(wrapper).toMatchStyledComponentsSnapshot()
  })
})

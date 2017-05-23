/**
 * @jest-environment node
 */

import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import DetailTitle from './DetailTitle'

describe('<DetailTitle />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<DetailTitle main="Main" sub="Sub" />)
    expect(wrapper).toMatchStyledComponentsSnapshot()
  })
})

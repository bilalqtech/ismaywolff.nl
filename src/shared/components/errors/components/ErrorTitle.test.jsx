/**
 * @jest-environment node
 */

import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import ErrorTitle from './ErrorTitle'

describe('<ErrorTitle />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ErrorTitle />)
    expect(wrapper).toMatchStyledComponentsSnapshot()
  })
})

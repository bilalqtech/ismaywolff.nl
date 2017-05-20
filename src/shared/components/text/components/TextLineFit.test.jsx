/**
 * @jest-environment node
 */

import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import TextLineFit from './TextLineFit'

describe('<TextLineFit />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TextLineFit />)
    expect(wrapper).toMatchStyledComponentsSnapshot()
  })
})

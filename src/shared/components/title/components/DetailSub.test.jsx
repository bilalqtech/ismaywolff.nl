/**
 * @jest-environment node
 */

import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import DetailSub from './DetailSub'

describe('<DetailSub />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<DetailSub />)
    expect(wrapper).toMatchStyledComponentsSnapshot()
  })
})

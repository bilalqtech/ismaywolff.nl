/**
 * @jest-environment node
 */

import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import DetailContainer from './DetailContainer'

describe('<DetailContainer />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<DetailContainer />)
    expect(wrapper).toMatchStyledComponentsSnapshot()
  })
})

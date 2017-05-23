/**
 * @jest-environment node
 */

import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import DetailMain from './DetailMain'

describe('<DetailMain />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<DetailMain />)
    expect(wrapper).toMatchStyledComponentsSnapshot()
  })
})

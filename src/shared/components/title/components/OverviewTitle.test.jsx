/**
 * @jest-environment node
 */

import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import OverviewTitle from './OverviewTitle'

describe('<OverviewTitle />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<OverviewTitle>Title</OverviewTitle>)
    expect(wrapper).toMatchStyledComponentsSnapshot()
  })
})

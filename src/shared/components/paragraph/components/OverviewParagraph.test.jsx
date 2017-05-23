/**
 * @jest-environment node
 */

import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import OverviewParagraph from './OverviewParagraph'

describe('<OverviewParagraph />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<OverviewParagraph />)
    expect(wrapper).toMatchStyledComponentsSnapshot()
  })
})

/**
 * @jest-environment node
 */

import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import Markdown from './Markdown'

describe('<Markdown />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Markdown />)
    expect(wrapper).toMatchStyledComponentsSnapshot()
  })
})

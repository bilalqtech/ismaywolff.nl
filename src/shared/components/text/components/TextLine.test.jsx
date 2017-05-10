/**
 * @jest-environment node
 */

import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import TextLine from './TextLine'

describe('<TextLine />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TextLine />)
    expect(shallowToJson(wrapper)).toMatchStyledComponentsSnapshot()
  })
})

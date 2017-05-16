/**
 * @jest-environment node
 */

import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Title from './Title'

describe('<Title />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Title />)
    expect(shallowToJson(wrapper)).toMatchStyledComponentsSnapshot()
  })
})

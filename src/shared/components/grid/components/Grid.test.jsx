/**
 * @jest-environment node
 */

import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Grid from './Grid'

describe('<Grid />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Grid />)
    expect(shallowToJson(wrapper)).toMatchStyledComponentsSnapshot()
  })

  it('renders correctly with gutter', () => {
    const wrapper = shallow(<Grid gutter={'10px'} />)
    expect(shallowToJson(wrapper)).toMatchStyledComponentsSnapshot()
  })
})

/**
 * @jest-environment node
 */

import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import HeaderTitle from './HeaderTitle'

describe('<HeaderTitle />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<HeaderTitle />)
    expect(shallowToJson(wrapper)).toMatchStyledComponentsSnapshot()
  })
})

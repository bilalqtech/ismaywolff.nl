/**
 * @jest-environment node
 */

import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import Spacer from './Spacer'

describe('<Spacer />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Spacer />)
    expect(wrapper).toMatchStyledComponentsSnapshot()
  })

  it('renders top correctly', () => {
    const wrapper = shallow(<Spacer top="1rem" />)
    expect(wrapper).toMatchStyledComponentsSnapshot()
  })

  it('renders left correctly', () => {
    const wrapper = shallow(<Spacer left="1rem" />)
    expect(wrapper).toMatchStyledComponentsSnapshot()
  })

  it('renders right correctly', () => {
    const wrapper = shallow(<Spacer right="1rem" />)
    expect(wrapper).toMatchStyledComponentsSnapshot()
  })

  it('renders bottom correctly', () => {
    const wrapper = shallow(<Spacer bottom="1rem" />)
    expect(wrapper).toMatchStyledComponentsSnapshot()
  })
})

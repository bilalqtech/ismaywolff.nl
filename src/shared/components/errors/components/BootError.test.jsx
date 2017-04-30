/* global window, ga */

import React from 'react'
import { mount } from 'enzyme'
import BootError from './BootError'

window.ga = () => {}

describe('<BootError />', () => {
  it('renders correctly', () => {
    const wrapper = mount(<BootError errorMessage={'Error message.'} />)
    expect(wrapper).toMatchSnapshot()
  })
})

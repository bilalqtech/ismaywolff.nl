/* global window, ga*/

import React from 'react'
import { mount } from 'enzyme'
import AppError from './AppError'

window.ga = () => {}

describe('<AppError />', () => {
  it('renders correctly', () => {
    const wrapper = mount(<AppError errorMessage={'Error message.'} />)
    expect(wrapper).toMatchSnapshot()
  })
})

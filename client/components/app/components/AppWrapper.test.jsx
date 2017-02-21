import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import AppWrapper from './AppWrapper'

describe('<AppWrapper />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AppWrapper />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

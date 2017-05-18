import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Root from './Root'

describe('<Root />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Root />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

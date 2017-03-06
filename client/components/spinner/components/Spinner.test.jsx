import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Spinner from './Spinner'

describe('<Spinner />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Spinner />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

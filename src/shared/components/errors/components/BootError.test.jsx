import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import BootError from './BootError'

describe('<BootError />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<BootError errorMessage={'Error message.'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

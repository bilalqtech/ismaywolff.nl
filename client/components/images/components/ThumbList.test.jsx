import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import ThumbList from './ThumbList'

describe('<ThumbList />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ThumbList ids={['1']} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

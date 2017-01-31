import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Thumb from './Thumb'

describe('<Thumb />', () => {
  it('renders the loading placeholder correctly', () => {
    const wrapper = shallow(<Thumb isFetching />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders images correctly', () => {
    const image = { title: 'title', url: 'url' }
    const wrapper = shallow(<Thumb image={image} isFetching={false} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

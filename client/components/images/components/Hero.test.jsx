import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Hero from './Hero'

describe('<Hero />', () => {
  it('renders the loading placeholder correctly', () => {
    const wrapper = shallow(<Hero isFetching />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders images correctly', () => {
    const image = { title: 'title', url: 'url' }
    const wrapper = shallow(<Hero image={image} isFetching={false} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

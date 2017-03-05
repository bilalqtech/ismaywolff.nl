import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import ImageLink from './ImageLink'

describe('<ImageLink />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ImageLink to={'url'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

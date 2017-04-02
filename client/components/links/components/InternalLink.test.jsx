import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import InternalLink from './InternalLink'

describe('<InternalLink />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<InternalLink to={'/url'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

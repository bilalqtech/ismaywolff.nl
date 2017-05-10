import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import ExternalLink from './ExternalLink'

describe('<ExternalLink />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ExternalLink href={'url'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

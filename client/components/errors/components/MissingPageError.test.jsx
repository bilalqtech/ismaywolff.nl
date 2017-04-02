import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import MissingPageError from './MissingPageError'

describe('<MissingPageError />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<MissingPageError />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

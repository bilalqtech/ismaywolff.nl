import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import WorkSubtitle from './WorkSubtitle'

describe('<WorkSubtitle />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<WorkSubtitle />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

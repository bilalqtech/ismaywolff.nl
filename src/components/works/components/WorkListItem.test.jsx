import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import WorkListItem from './WorkListItem'

describe('<WorkListItem />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<WorkListItem work={{ title: 'title' }} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import WorkDetail from './WorkDetail'

describe('<WorkDetail />', () => {
  it('renders correctly', () => {
    const mockWork = {
      description: 'description',
      published: 'published',
      title: 'title',
      type: 'type'
    }
    const wrapper = shallow(<WorkDetail work={mockWork} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

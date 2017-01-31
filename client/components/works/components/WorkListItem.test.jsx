import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import WorkListItem from './WorkListItem'

describe('<WorkListItem />', () => {
  it('renders correctly', () => {
    const mockWork = {
      description: 'description',
      published: 'published',
      slug: 'title',
      title: 'title',
      type: 'type'
    }
    const wrapper = shallow(<WorkListItem work={mockWork} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

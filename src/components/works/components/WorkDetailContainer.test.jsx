import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { WorkDetailContainer } from './WorkDetailContainer'

describe('<WorkDetailContainer />', () => {
  it('renders correctly', () => {
    const mockWorks = { items: { id: {
      description: 'description',
      published: 'published',
      slug: 'slug',
      title: 'title',
      type: 'type'
    } } }
    const wrapper = shallow(<WorkDetailContainer params={{ id: 'id' }} works={mockWorks} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

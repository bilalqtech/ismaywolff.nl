import React from 'react'
import { mount, shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { WorkDetailContainer } from './WorkDetailContainer'

describe('<WorkDetailContainer />', () => {
  it('renders correctly', () => {
    const mockWorks = { entities: { id: {
      description: 'description',
      published: 'published',
      slug: 'slug',
      title: 'title',
      type: 'type'
    } } }
    const wrapper = shallow(<WorkDetailContainer
      fetchWorks={() => {}}
      params={{ id: 'id' }}
      works={mockWorks}
    />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('fetches works on mount', () => {
    const mockFetch = jest.fn()
    mount(<WorkDetailContainer
      fetchWorks={mockFetch}
      params={{ id: 'id' }}
      works={{ entities: {} }}
    />)
    expect(mockFetch).toBeCalled()
  })
})

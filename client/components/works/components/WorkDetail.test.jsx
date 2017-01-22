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
    const wrapper = shallow(<WorkDetail work={mockWork} isLoading={false} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders a loading state', () => {
    const wrapper = shallow(<WorkDetail isLoading />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

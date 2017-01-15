import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { WorkListItemContainer } from './WorkListItemContainer'

describe('<WorkListItemContainer />', () => {
  it('renders correctly', () => {
    const mockWorks = {
      entities: {
        1: {
          description: 'description',
          published: 'published',
          slug: 'title',
          title: 'title',
          type: 'type'
        }
      }
    }
    const wrapper = shallow(<WorkListItemContainer id={'1'} works={mockWorks} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

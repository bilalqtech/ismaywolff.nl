import React from 'react'
import { mount, shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { WorkDetailContainer } from './WorkDetailContainer'

describe('<WorkDetailContainer />', () => {
  const entities = {
    works: {
      id: {
        description: 'description',
        published: 'published',
        slug: 'title',
        title: 'title',
        type: 'type'
      }
    }
  }
  const hasWorks = { isFetching: false, result: ['id'] }
  const hasNoWorks = { isFetching: false, result: [] }

  it('renders correctly', () => {
    const wrapper = shallow(<WorkDetailContainer
      fetchWorks={() => {}}
      params={{ id: 'id' }}
      entities={entities}
      works={hasWorks}
    />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('fetches works when needed', () => {
    const spy = jest.fn()
    mount(<WorkDetailContainer
      fetchWorks={spy}
      params={{ id: 'id' }}
      entities={entities}
      works={hasNoWorks}
    />)
    expect(spy).toBeCalled()
  })

  it('does not fetch work when it already has', () => {
    const spy = jest.fn()
    mount(<WorkDetailContainer
      fetchWorks={spy}
      params={{ id: 'id' }}
      entities={entities}
      works={hasWorks}
    />)
    expect(spy).not.toBeCalled()
  })
})

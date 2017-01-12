import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { WorkListContainer } from './WorkListContainer'

jest.mock('./WorkList', () => () => <div>WorkListMock</div>)

describe('<WorkListContainer />', () => {
  const mockWorks = {
    result: ['1']
  }

  it('renders correctly', () => {
    const wrapper = shallow(<WorkListContainer fetchWorks={() => {}} works={mockWorks} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('fetches works on mount', () => {
    const mockFetch = jest.fn()
    mount(<WorkListContainer fetchWorks={mockFetch} works={mockWorks} />)
    expect(mockFetch).toBeCalled()
  })
})

import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { WorkList } from './WorkList'

describe('<WorkList />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<WorkList fetchWorks={() => {}} works={{}} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('fetches works on mount', () => {
    const mockFetch = jest.fn()
    mount(<WorkList fetchWorks={mockFetch} works={{}} />)
    expect(mockFetch).toBeCalled()
  })
})

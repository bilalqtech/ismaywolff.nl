import React from 'react'
import { mount } from 'enzyme'
import { mountToJson } from 'enzyme-to-json'
import { WorkList } from './WorkList'

describe('<WorkList />', () => {
  it('renders correctly', () => {
    const wrapper = mount(<WorkList fetchWorks={() => {}} works={{}} />)
    expect(mountToJson(wrapper)).toMatchSnapshot()
  })

  it('fetches works on mount', () => {
    const mockFetch = jest.fn()
    mount(<WorkList fetchWorks={mockFetch} works={{}} />)
    expect(mockFetch).toBeCalled()
  })
})

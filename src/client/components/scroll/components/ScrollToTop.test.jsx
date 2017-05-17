import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { ScrollToTop } from './ScrollToTop'

describe('<ScrollToTop />', () => {
  it('renders correctly', () => {
    const location = { pathname: 'path' }
    const wrapper = shallow(<ScrollToTop location={location} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('scrolls to top on location changes', () => {
    Object.defineProperty(window, 'scrollTo', {
      writable: true,
      value: jest.fn()
    })

    const wrapper = mount(<ScrollToTop location={{ pathname: 'old' }} />)

    wrapper.setProps({ location: { pathname: 'new' } })
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0)
  })

  it('does nothing when location stays the same', () => {
    Object.defineProperty(window, 'scrollTo', {
      writable: true,
      value: jest.fn()
    })
    const location = { pathname: 'old' }
    const wrapper = mount(<ScrollToTop location={location} />)

    wrapper.setProps({ location })
    expect(window.scrollTo).not.toHaveBeenCalled()
  })
})

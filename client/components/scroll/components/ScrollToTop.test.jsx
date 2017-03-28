import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { ScrollToTop } from './ScrollToTop'

describe('<ScrollToTop />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ScrollToTop location={{}} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('scrolls to top on route changes for clients without scroll restoration', () => {
    Object.defineProperty(window.history, 'scrollRestoration', {
      writable: true,
      value: false
    })

    Object.defineProperty(window, 'scrollTo', {
      writable: true,
      value: jest.fn()
    })

    const wrapper = mount(<ScrollToTop location={{ url: 'old' }} />)

    wrapper.setProps({ location: { url: 'new' } })
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0)
  })

  it('ignores clients with scroll restoration', () => {
    Object.defineProperty(window.history, 'scrollRestoration', {
      writable: true,
      value: true
    })

    Object.defineProperty(window, 'scrollTo', {
      writable: true,
      value: jest.fn()
    })

    const wrapper = mount(<ScrollToTop location={{ url: 'old' }} />)

    wrapper.setProps({ location: { url: 'new' } })
    expect(window.scrollTo).not.toHaveBeenCalled()
  })
})

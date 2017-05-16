import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { ScrollToTop } from './ScrollToTop'

describe('<ScrollToTop />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ScrollToTop location={{}} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('scrolls to top on location changes', () => {
    Object.defineProperty(window, 'scrollTo', {
      writable: true,
      value: jest.fn()
    })

    const wrapper = mount(<ScrollToTop location={{ url: 'old' }} />)

    wrapper.setProps({ location: { url: 'new' } })
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0)
  })

  it('does nothing when location stays the same', () => {
    Object.defineProperty(window, 'scrollTo', {
      writable: true,
      value: jest.fn()
    })
    const location = { url: 'old' }
    const wrapper = mount(<ScrollToTop location={location} />)

    wrapper.setProps({ location })
    expect(window.scrollTo).not.toHaveBeenCalled()
  })
})

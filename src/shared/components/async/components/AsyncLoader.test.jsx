import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import AsyncLoader from './AsyncLoader'

jest.mock('../../../services/raven')

describe('<AsyncLoader />', () => {
  it('does not render a spinner before the delay', () => {
    const wrapper = shallow(<AsyncLoader isLoading pastDelay={false} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders a spinner after the delay', () => {
    const wrapper = shallow(<AsyncLoader isLoading pastDelay />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders errors', () => {
    const wrapper = shallow(<AsyncLoader isLoading={false} pastDelay error={new Error('error')} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders correctly', () => {
    const wrapper = shallow(<AsyncLoader isLoading={false} pastDelay={false} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

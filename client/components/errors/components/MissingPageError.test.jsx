import React from 'react'
import { mount } from 'enzyme'
import { mountToJson } from 'enzyme-to-json'
import MissingPageError from './MissingPageError'

jest.mock('../../links', () => ({
  InternalLink: () => <a href="https://test.com">Test</a>
}))

describe('<MissingPageError />', () => {
  it('renders correctly', () => {
    const wrapper = mount(<MissingPageError />)
    expect(mountToJson(wrapper)).toMatchSnapshot()
  })
})

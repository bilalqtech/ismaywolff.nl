import React from 'react'
import { mount } from 'enzyme'
import { mountToJson } from 'enzyme-to-json'
import ResponsiveThumbnail from './ResponsiveThumbnail'

jest.mock('./Thumbnail', () => (
  () => <div />
))

describe('<ResponsiveThumbnail />', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <ResponsiveThumbnail id={'one'} />
    )
    expect(mountToJson(wrapper)).toMatchSnapshot()
  })
})

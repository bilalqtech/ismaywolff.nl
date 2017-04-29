import React from 'react'
import { mount } from 'enzyme'
import ResponsiveThumbnail from './ResponsiveThumbnail'

jest.mock('./Thumbnail', () => () => <div />)

describe('<ResponsiveThumbnail />', () => {
  it('renders correctly', () => {
    const wrapper = mount(<ResponsiveThumbnail id={'one'} size={{ width: 50 }} />)
    expect(wrapper).toMatchSnapshot()
  })
})
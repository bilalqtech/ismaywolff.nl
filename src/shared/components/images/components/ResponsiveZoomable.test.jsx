import React from 'react'
import { mount } from 'enzyme'
import ResponsiveZoomable from './ResponsiveZoomable'

jest.mock('./Zoomable', () => () => <div />)

describe('<ResponsiveZoomable />', () => {
  it('renders correctly', () => {
    const wrapper = mount(<ResponsiveZoomable id={'one'} size={{ width: 50 }} />)
    expect(wrapper).toMatchSnapshot()
  })
})
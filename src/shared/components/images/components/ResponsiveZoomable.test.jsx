import React from 'react'
import { shallow } from 'enzyme'
import ResponsiveZoomable from './ResponsiveZoomable'

jest.mock('./Zoomable', () => () => <div />)

describe('<ResponsiveZoomable />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ResponsiveZoomable id={'one'} />)
    expect(wrapper).toMatchSnapshot()
  })
})

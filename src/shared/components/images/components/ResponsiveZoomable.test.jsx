import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import ResponsiveZoomable from './ResponsiveZoomable'

jest.mock('./Zoomable', () => () => <div />)

describe('<ResponsiveZoomable />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ResponsiveZoomable id={'one'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

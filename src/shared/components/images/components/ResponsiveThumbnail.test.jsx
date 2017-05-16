import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import ResponsiveThumbnail from './ResponsiveThumbnail'

jest.mock('./Thumbnail', () => () => <div />)

describe('<ResponsiveThumbnail />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ResponsiveThumbnail id={'one'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

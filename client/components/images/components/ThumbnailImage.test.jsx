import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import ThumbnailImage from './ThumbnailImage'

describe('<ThumbnailImage />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ThumbnailImage />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

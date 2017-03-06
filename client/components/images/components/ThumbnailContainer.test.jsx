import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import ThumbnailContainer from './ThumbnailContainer'

describe('<ThumbnailContainer />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ThumbnailContainer />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

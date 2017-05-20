import React from 'react'
import { shallow } from 'enzyme'
import ResponsiveThumbnail from './ResponsiveThumbnail'

jest.mock('./Thumbnail', () => () => <div />)

describe('<ResponsiveThumbnail />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ResponsiveThumbnail id={'one'} />)
    expect(wrapper).toMatchSnapshot()
  })
})

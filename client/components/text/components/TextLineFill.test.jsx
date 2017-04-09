import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { matcher, serializer } from 'jest-glamor-react'
import TextLine from './TextLine'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('<TextLine />', () => {
  it('renders correctly for direction right', () => {
    const wrapper = shallow(<TextLine direction={'right'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshotWithGlamor()
  })

  it('renders correctly for direction left', () => {
    const wrapper = shallow(<TextLine direction={'left'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshotWithGlamor()
  })
})

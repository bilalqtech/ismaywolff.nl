import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { matcher, serializer } from 'jest-glamor-react'
import InternalLink from './InternalLink'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('<InternalLink />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<InternalLink to={'/url'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshotWithGlamor()
  })
})

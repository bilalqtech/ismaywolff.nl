import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { matcher, serializer } from 'jest-glamor-react'
import HeaderLink from './HeaderLink'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('<HeaderLink />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<HeaderLink />)
    expect(shallowToJson(wrapper)).toMatchSnapshotWithGlamor()
  })

  it('accepts size parameter', () => {
    const wrapper = shallow(<HeaderLink size={'100%'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshotWithGlamor()
  })
})

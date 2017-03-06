import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { Thumbnail } from './Thumbnail'

describe('<Thumbnail />', () => {
  it('renders correctly', () => {
    const entities = { one: { url: 'url', title: 'title' } }
    const wrapper = shallow(
      <Thumbnail entities={entities} id={'one'} size={100} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders a loading state', () => {
    const wrapper = shallow(
      <Thumbnail entities={{}} id={'one'} size={100} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

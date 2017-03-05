import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { Image } from './Image'

describe('<Image />', () => {
  it('renders correctly', () => {
    const entities = { one: { url: 'url', title: 'title' } }
    const wrapper = shallow(
      <Image entities={entities} id={'one'} width={100} height={200} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders a loading state', () => {
    const wrapper = shallow(
      <Image entities={{}} id={'one'} width={100} height={200} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

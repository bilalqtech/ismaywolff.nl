import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { Zoomable } from './Zoomable'

describe('<Zoomable />', () => {
  it('renders correctly', () => {
    const entities = { one: { url: 'url', title: 'title' } }
    const wrapper = shallow(
      <Zoomable entities={entities} id={'one'} width={100} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders a loading state', () => {
    const wrapper = shallow(
      <Zoomable entities={{}} id={'one'} width={100} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})


import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { WorkDetail } from './index'

describe('<WorkDetail />', () => {
  it('renders correctly', () => {
    const match = { params: { id: 'one' } }
    const entities = { one: { title: 'title' } }
    const wrapper = shallow(<WorkDetail match={match} entities={entities} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders a loading state', () => {
    const match = { params: { id: 'one' } }
    const wrapper = shallow(<WorkDetail match={match} entities={{}} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { WorkDetail } from './index'

describe('<WorkDetail />', () => {
  it('renders correctly', () => {
    const match = { params: { id: 'one' } }
    const entities = { one: { title: 'title' } }
    const wrapper = shallow(<WorkDetail match={match} entities={entities} works={{}} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders a loading state', () => {
    const match = { params: { id: 'one' } }
    const wrapper = shallow(<WorkDetail match={match} entities={{}} works={{ isFetching: true }} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders errors', () => {
    const match = { params: { id: 'one' } }
    const works = { hasError: true, errorMessage: 'Something went wrong' }
    const wrapper = shallow(<WorkDetail match={match} entities={{}} works={works} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

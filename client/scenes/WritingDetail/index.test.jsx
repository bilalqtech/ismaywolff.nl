import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { WritingDetail } from './index'

describe('<WritingDetail />', () => {
  it('renders correctly', () => {
    const match = { params: { id: 'one' } }
    const entities = { one: { title: 'title', published: '01-01-2000', text: 'text' } }
    const articles = { result: ['one'], isFetching: false, didFetch: true }
    const wrapper = shallow(<WritingDetail match={match} entities={entities} articles={articles} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders a loading state', () => {
    const match = { params: { id: 'one' } }
    const articles = { result: [], isFetching: true, didFetch: false }
    const wrapper = shallow(<WritingDetail match={match} entities={{}} articles={articles} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders a missing page error', () => {
    const match = { params: { id: 'one' } }
    const entities = { two: { title: 'title' } }
    const articles = { result: ['two'], isFetching: false, didFetch: true }
    const wrapper = shallow(<WritingDetail match={match} entities={entities} articles={articles} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders api errors', () => {
    const match = { params: { id: 'one' } }
    const articles = { hasError: true, errorMessage: 'Something went wrong', result: [], didFetch: true }
    const wrapper = shallow(<WritingDetail match={match} entities={{}} articles={articles} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

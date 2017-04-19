import React from 'react'
import { shallow } from 'enzyme'
import { DumbWorkDetail } from './index'

describe('<WorkDetail />', () => {
  it('renders correctly', () => {
    const match = { params: { id: 'one' } }
    const entities = { one: { title: 'title' } }
    const works = { result: ['one'], isFetching: false, didFetch: true }
    const wrapper = shallow(
      <DumbWorkDetail match={match} entities={entities} works={works} hasWorks />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a loading state', () => {
    const match = { params: { id: 'one' } }
    const works = { result: [], isFetching: true, didFetch: false }
    const wrapper = shallow(
      <DumbWorkDetail match={match} entities={{}} works={works} hasWorks={false} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a missing page error', () => {
    const match = { params: { id: 'one' } }
    const entities = { two: { title: 'title' } }
    const works = { result: ['two'], isFetching: false, didFetch: true }
    const wrapper = shallow(
      <DumbWorkDetail match={match} entities={entities} works={works} hasWorks />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders api errors', () => {
    const match = { params: { id: 'one' } }
    const works = { errorMessage: 'Something went wrong', result: [], didFetch: true }
    const wrapper = shallow(
      <DumbWorkDetail match={match} entities={{}} works={works} hasWorks={false} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})

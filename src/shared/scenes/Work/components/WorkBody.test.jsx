import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { DumbWorkBody } from './WorkBody'

describe('<WorkBody />', () => {
  it('renders correctly', () => {
    const entities = {
      one: {
        slug: 'slug',
        thumbnail: 'thumbnail'
      }
    }
    const works = {
      result: ['one'],
      didFetch: true
    }
    const wrapper = shallow(<DumbWorkBody entities={entities} works={works} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders a loading state', () => {
    const works = { isFetching: true }
    const wrapper = shallow(<DumbWorkBody entities={{}} works={works} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders errors', () => {
    const works = { errorMessage: 'Something went wrong', didFetch: true }
    const wrapper = shallow(<DumbWorkBody entities={{}} works={works} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { WritingBody } from './WritingBody'

describe('<WritingBody />', () => {
  it('renders correctly', () => {
    const entities = {
      one: {
        slug: 'slug',
        published: '10-12-2000',
        title: 'title'
      }
    }
    const articles = {
      result: ['one'],
      didFetch: true
    }
    const wrapper = shallow(<WritingBody entities={entities} articles={articles} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders a loading state', () => {
    const articles = { isFetching: true }
    const wrapper = shallow(<WritingBody entities={{}} articles={articles} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders errors', () => {
    const articles = { hasError: true, errorMessage: 'Something went wrong', didFetch: true }
    const wrapper = shallow(<WritingBody entities={{}} articles={articles} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

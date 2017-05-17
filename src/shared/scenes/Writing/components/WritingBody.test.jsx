import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { DumbWritingBody } from './WritingBody'

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
      didFetch: true,
      errorMessage: '',
      isFetching: false
    }
    const wrapper = shallow(<DumbWritingBody entities={entities} articles={articles} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders a loading state', () => {
    const articles = {
      result: [],
      didFetch: false,
      errorMessage: '',
      isFetching: true
    }
    const wrapper = shallow(<DumbWritingBody entities={{}} articles={articles} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders errors', () => {
    const articles = {
      result: [],
      didFetch: true,
      errorMessage: 'Something went wrong',
      isFetching: false
    }
    const wrapper = shallow(<DumbWritingBody entities={{}} articles={articles} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

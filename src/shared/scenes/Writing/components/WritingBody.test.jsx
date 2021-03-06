import React from 'react'
import { shallow } from 'enzyme'
import { DumbWritingBody } from './WritingBody'

describe('<WritingBody />', () => {
  it('renders correctly', () => {
    const entities = {
      one: {
        slug: 'slug',
        published: '10-12-2000',
        title: 'title',
        summary: 'summary'
      }
    }
    const articles = {
      result: ['one'],
      didFetch: true,
      errorMessage: '',
      isFetching: false
    }
    const wrapper = shallow(<DumbWritingBody entities={entities} articles={articles} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a loading state', () => {
    const articles = {
      result: [],
      didFetch: false,
      errorMessage: '',
      isFetching: true
    }
    const wrapper = shallow(<DumbWritingBody entities={{}} articles={articles} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders errors', () => {
    const articles = {
      result: [],
      didFetch: true,
      errorMessage: 'Something went wrong',
      isFetching: false
    }
    const wrapper = shallow(<DumbWritingBody entities={{}} articles={articles} />)
    expect(wrapper).toMatchSnapshot()
  })
})

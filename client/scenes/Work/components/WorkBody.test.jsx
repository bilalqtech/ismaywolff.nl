import React from 'react'
import { shallow } from 'enzyme'
import { WorkBody } from './WorkBody'

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
    const wrapper = shallow(<WorkBody entities={entities} works={works} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a loading state', () => {
    const works = { isFetching: true }
    const wrapper = shallow(<WorkBody entities={{}} works={works} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders errors', () => {
    const works = { hasError: true, errorMessage: 'Something went wrong', didFetch: true }
    const wrapper = shallow(<WorkBody entities={{}} works={works} />)
    expect(wrapper).toMatchSnapshot()
  })
})

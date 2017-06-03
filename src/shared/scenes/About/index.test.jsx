/* eslint-disable react/jsx-boolean-value */

import React from 'react'
import { shallow, mount } from 'enzyme'
import { DumbAbout } from './index'

describe('<About />', () => {
  it('renders correctly', () => {
    const entities = {
      about: {
        slug: 'about',
        title: 'About',
        text: 'text'
      }
    }
    const pages = {
      result: ['about'],
      didFetch: true,
      errorMessage: '',
      isFetching: false
    }
    const wrapper = shallow(
      <DumbAbout fetchPagesIfNeeded={() => {}} pages={pages} hasPages={true} entities={entities} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a missing page error', () => {
    const entities = {
      aboot: {
        slug: 'aboot',
        title: 'Aboot',
        text: 'text'
      }
    }
    const pages = {
      result: ['aboot'],
      didFetch: true,
      errorMessage: '',
      isFetching: false
    }
    const wrapper = shallow(
      <DumbAbout fetchPagesIfNeeded={() => {}} pages={pages} hasPages={true} entities={entities} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a loading state', () => {
    const pages = {
      didFetch: false,
      errorMessage: '',
      isFetching: false,
      result: []
    }
    const wrapper = shallow(
      <DumbAbout fetchPagesIfNeeded={() => {}} pages={pages} hasPages={false} entities={{}} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders errors', () => {
    const pages = {
      result: [],
      didFetch: true,
      errorMessage: 'Something went wrong',
      isFetching: false
    }
    const wrapper = shallow(
      <DumbAbout fetchPagesIfNeeded={() => {}} pages={pages} hasPages={false} entities={{}} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('has server side data needs defined', () => {
    expect(DumbAbout.needs()).toMatchSnapshot()
  })

  it('fetches data after mounting', () => {
    const spyPages = jest.fn()
    const pages = {
      didFetch: false,
      errorMessage: '',
      isFetching: false,
      result: []
    }

    mount(<DumbAbout fetchPagesIfNeeded={spyPages} pages={pages} hasPages={false} entities={{}} />)

    expect(spyPages).toHaveBeenCalled()
  })
})

import React from 'react'
import { shallow, mount } from 'enzyme'
import { DumbWorkDetail } from './index'

describe('<WorkDetail />', () => {
  it('renders correctly', () => {
    const match = { params: { id: 'one' } }
    const entities = {
      one: {
        title: 'title',
        slug: 'slug',
        type: 'type',
        published: '2011-04-01',
        summary: 'summary',
        images: ['one'],
        thumbnail: 'thumbnail'
      }
    }
    const works = {
      result: ['one'],
      isFetching: false,
      didFetch: true,
      errorMessage: ''
    }

    const wrapper = shallow(
      <DumbWorkDetail
        match={match}
        entities={entities}
        works={works}
        hasWorks
        fetchWorksIfNeeded={() => {}}
        fetchImagesIfNeeded={() => {}}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('has server side data needs defined', () => {
    expect(DumbWorkDetail.needs()).toMatchSnapshot()
  })

  it('fetches data after mounting', () => {
    const spyImages = jest.fn()
    const spyWorks = jest.fn()
    const match = { params: { id: 'one' } }
    const works = {
      result: [],
      isFetching: true,
      didFetch: false,
      errorMessage: ''
    }

    mount(
      <DumbWorkDetail
        match={match}
        entities={{}}
        works={works}
        hasWorks={false}
        fetchWorksIfNeeded={spyWorks}
        fetchImagesIfNeeded={spyImages}
      />
    )

    expect(spyWorks).toHaveBeenCalled()
    expect(spyImages).toHaveBeenCalled()
  })

  it('renders a loading state', () => {
    const match = { params: { id: 'one' } }
    const works = {
      result: [],
      isFetching: true,
      didFetch: false,
      errorMessage: ''
    }
    const wrapper = shallow(
      <DumbWorkDetail
        match={match}
        entities={{}}
        works={works}
        hasWorks={false}
        fetchWorksIfNeeded={() => {}}
        fetchImagesIfNeeded={() => {}}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a missing page error', () => {
    const match = { params: { id: 'one' } }
    const entities = { two: { title: 'title' } }
    const works = {
      result: ['two'],
      isFetching: false,
      didFetch: true,
      errorMessage: ''
    }
    const wrapper = shallow(
      <DumbWorkDetail
        match={match}
        entities={entities}
        works={works}
        hasWorks
        fetchWorksIfNeeded={() => {}}
        fetchImagesIfNeeded={() => {}}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders api errors', () => {
    const match = { params: { id: 'one' } }
    const works = {
      result: [],
      isFetching: false,
      didFetch: true,
      errorMessage: 'Something went wrong'
    }
    const wrapper = shallow(
      <DumbWorkDetail
        match={match}
        entities={{}}
        works={works}
        hasWorks={false}
        fetchWorksIfNeeded={() => {}}
        fetchImagesIfNeeded={() => {}}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})

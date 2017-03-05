import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
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
      result: ['one']
    }
    const wrapper = shallow(<WorkBody entities={entities} works={works} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders a loading state', () => {
    const works = { result: [] }
    const wrapper = shallow(<WorkBody entities={{}} works={works} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

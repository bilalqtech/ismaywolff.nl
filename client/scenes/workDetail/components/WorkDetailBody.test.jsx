import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import WorkDetailBody from './WorkDetailBody'

describe('<WorkDetailBody />', () => {
  it('renders correctly', () => {
    const work = {
      title: 'title',
      type: 'type',
      published: 'published',
      description: 'description',
      images: ['one']
    }
    const wrapper = shallow(<WorkDetailBody work={work} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

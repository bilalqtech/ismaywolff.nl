import React from 'react'
import { shallow } from 'enzyme'
import WorkDetailBody from './WorkDetailBody'

describe('<WorkDetailBody />', () => {
  it('renders correctly', () => {
    const work = {
      title: 'title',
      type: 'type',
      published: '2011-04-01',
      description: 'description',
      images: ['one']
    }
    const wrapper = shallow(<WorkDetailBody work={work} />)
    expect(wrapper).toMatchSnapshot()
  })
})
import React from 'react'
import { shallow } from 'enzyme'
import WorkItem from './WorkItem'

describe('<WorkItem />', () => {
  it('renders correctly', () => {
    const work = {
      slug: 'slug',
      thumbnail: 'thumbnail',
      title: 'title',
      description: 'description'
    }
    const wrapper = shallow(<WorkItem work={work} />)
    expect(wrapper).toMatchSnapshot()
  })
})

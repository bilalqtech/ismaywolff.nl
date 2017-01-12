import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import WorkList from './WorkList'

describe('<WorkList />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<WorkList ids={['1']} isFetching={false} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('shows a loading indicator when there are no works', () => {
    const wrapper = shallow(<WorkList ids={[]} isFetching />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

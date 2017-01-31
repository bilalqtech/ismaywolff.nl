import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { WorkDetailContainer } from './WorkDetailContainer'

describe('<WorkDetailContainer />', () => {
  const works = {
    result: ['id'],
    isFetching: false
  }

  it('renders correctly', () => {
    const wrapper = shallow(<WorkDetailContainer
      params={{ id: 'id' }}
      entities={{}}
      works={works}
    />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

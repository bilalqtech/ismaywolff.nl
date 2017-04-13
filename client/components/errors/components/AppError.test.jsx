import React from 'react'
import { shallow } from 'enzyme'
import AppError from './AppError'

describe('<AppError />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AppError error={'Error message.'} />)
    expect(wrapper).toMatchSnapshot()
  })
})

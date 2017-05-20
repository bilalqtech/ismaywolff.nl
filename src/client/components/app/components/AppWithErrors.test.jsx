import React from 'react'
import { shallow } from 'enzyme'
import AppWithErrors from './AppWithErrors'

describe('<AppWithErrors />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AppWithErrors errorMessage={'Message'} />)
    expect(wrapper).toMatchSnapshot()
  })
})

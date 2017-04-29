import React from 'react'
import { shallow, mount } from 'enzyme'
import { DumbWork } from './index'

jest.mock('./components/WorkBody')

describe('<Work />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<DumbWork fetchWorks={() => {}} fetchImages={() => {}} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('has server side data needs defined', () => {
    expect(DumbWork.getNeeds()).toMatchSnapshot()
  })

  it('fetches data after mounting', () => {
    const spyImages = jest.fn()
    const spyWorks = jest.fn()

    mount(<DumbWork fetchWorks={spyWorks} fetchImages={spyImages} />)

    expect(spyWorks).toHaveBeenCalled()
    expect(spyImages).toHaveBeenCalled()
  })
})

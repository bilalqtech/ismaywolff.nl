import React from 'react'
import { shallow, mount } from 'enzyme'
import { DumbWork } from './index'

jest.mock('./components/WorkBody')

describe('<Work />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <DumbWork fetchWorksIfNeeded={() => {}} fetchImagesIfNeeded={() => {}} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('has server side data needs defined', () => {
    expect(DumbWork.needs()).toMatchSnapshot()
  })

  it('fetches data after mounting', () => {
    const spyImages = jest.fn()
    const spyWorks = jest.fn()

    mount(<DumbWork fetchWorksIfNeeded={spyWorks} fetchImagesIfNeeded={spyImages} />)

    expect(spyWorks).toHaveBeenCalled()
    expect(spyImages).toHaveBeenCalled()
  })
})

/* eslint-env jest */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import WorkPage from '../WorkPage';

describe('<WorkPage />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<WorkPage>children</WorkPage>);

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

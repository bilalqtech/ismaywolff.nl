/* eslint-env jest */
/* eslint-disable import/no-extraneous-dependencies */

import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import Root from '../Root';

describe('<Root />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Root />);

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

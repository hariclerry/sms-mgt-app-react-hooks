/**
 * Test for the home components
 */

import React from 'react';
import { shallow } from 'enzyme';
import Home from 'components/user_auth/home';

describe('Home component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toBeTruthy();
  });
});
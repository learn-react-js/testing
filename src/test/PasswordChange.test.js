import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PasswordChange from '../components/PasswordChange'
configure({ adapter: new Adapter() });

describe('<PasswordChange> component ', () => {
  const wrapper = shallow(<PasswordChange />);
  it('have form tag', () => {
    expect(wrapper).toHaveLength(1);
  });
});